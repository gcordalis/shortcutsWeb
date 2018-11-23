<template>
  <v-card class="actionCard">
    <v-card-title primary-title :style="action.titleColor">
      <v-layout>
        <v-flex xs8 class="text-xs-left">
          <h3 class="headline mb-0">
            <v-icon v-html="action.icon" class="actionIcon" :style="action.iconColor"></v-icon>
            {{ action.name }}
          </h3>
        </v-flex>
        <v-flex xs4 class="text-xs-right">
          <h3 class="headline mb-0">
            <v-icon class="actionCloseIcon" @click="action.isVisible = !action.isVisible">remove_circle</v-icon>
            <v-icon class="actionCloseIcon" @click="removeActionLocal(action)">cancel</v-icon>
          </h3>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text :style="action.bodyColor" v-if="action.isVisible">
      <div v-if="action.name === 'Comment'">
        <v-textarea
          name="input-7-4"
          label="Enter comment..."
          value=""
          v-model="action.text"
        ></v-textarea>
      </div>
      <div v-if="action.name === 'Text'">
        <v-textarea
          name="input-7-4"
          label="Enter text..."
          value=""
          v-model="action.text"
        ></v-textarea>
      </div>
      <div v-if="action.name === 'Number'">
        <v-layout>
          <v-flex xs3>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Number'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs9>
            <v-text-field
              placeholder="42"
              type="number"
              v-model="action.number"
              reverse
            ></v-text-field>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'Calculate'">
        <v-layout>
          <v-flex xs3>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Operation'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs9 class="text-xs-right">
            <v-btn icon @click="action.operation = '+'">
              <v-icon :color="action.operation === '+' ? 'primary' : 'rgba(0,0,0,.87)'">add</v-icon>
            </v-btn>
            <v-btn icon @click="action.operation = '-'">
              <v-icon :color="action.operation === '-' ? 'primary' : 'rgba(0,0,0,.87)'">remove</v-icon>
            </v-btn>
            <v-btn icon @click="action.operation = 'x'">
              <v-icon :color="action.operation === 'x' ? 'primary' : 'rgba(0,0,0,.87)'">clear</v-icon>
            </v-btn>
            <v-btn icon @click="action.operation = '/'">
              <v-icon :color="action.operation === '/' ? 'primary' : 'rgba(0,0,0,.87)'">crop_square</v-icon>
            </v-btn>
            <!-- Additional Operation Options -->
<!--             <v-btn icon>
              <v-icon>more_horiz</v-icon>
            </v-btn> -->
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs3>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Operand'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs9>
              <v-text-field
                placeholder="42"
                type="number"
                v-model="action.operand"
                reverse
              ></v-text-field>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'Show Result'">
        <v-textarea
          name="input-7-4"
          label="Enter text..."
          value=""
          v-model="action.text"
        ></v-textarea>
      </div>
      <div v-if="action.name === 'Wait'">
        <v-layout>  
          <v-flex xs3>
            <v-list-tile-content>
              <v-list-tile-title v-if="action.time !== 1"v-text="action.time + ' Seconds' "></v-list-tile-title>
              <v-list-tile-title v-if="action.time === 1"v-text="action.time + ' Second' "></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs9>
            <v-text-field
              placeholder="1"
              type="number"
              v-model="action.time"
              reverse
            ></v-text-field>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'URL'">
        <v-layout>
          <v-flex xs3>
            <v-list-tile-content>
              <v-list-tile-title v-text="'URL'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs9>
            <v-text-field
              placeholder="example.com"
              type="text"
              v-model="action.url"
              reverse
            ></v-text-field>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'Get Contents of URL'">
        <v-layout>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Method'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs1 class="text-xs-right">
            <v-select
              :items="action.methodOptions"
              v-model="action.method"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Headers'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs1>
            <v-list-tile-content>
              <v-icon @click="action.headersVisible = !action.headersVisible">keyboard_arrow_down</v-icon>
            </v-list-tile-content>
          </v-flex>
        </v-layout>
        <v-layout v-if="action.headersVisible">
          <v-flex xs1>
            <v-list-tile-content>
              <v-icon class="removeIcon" @click="">remove_circle</v-icon>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs3>
            <v-text-field
              placeholder="Key"
              type="text"
              v-model="action.headers[0].key"
            ></v-text-field>
          </v-flex>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              placeholder="Value"
              type="text"
              v-model="action.headers[0].value"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout  v-if="action.headersVisible">
          <v-flex xs1>
            <v-list-tile-content>
              <v-icon class="addIcon" @click="">add_circle</v-icon>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Add new header'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
        </v-layout>
        <v-layout v-if="action.method !== 'GET'">
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Request'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs1 class="text-xs-right">
            <v-select
              label="Type"
              :items="action.requestOptions"
              v-model="action.requestBodyType"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout v-if="action.method !== 'GET' & action.requestBodyType === 'JSON' || action.requestBodyType === 'Form'">
          <v-flex xs1>
            <v-list-tile-content>
              <v-icon class="addIcon" @click="">add_circle</v-icon>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Add new field'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'Set Torch'">
        <v-layout align-center justify-center>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Torch'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs1>
            <v-btn-toggle v-model="toggle_exclusive">
              <v-btn flat @click="action.setting = 'off'">
                <v-icon>flash_off</v-icon>
              </v-btn>
              <v-btn flat @click="action.setting = 'on'">
                <v-icon>flash_on</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'Set Name'">
        <v-layout>
          <v-flex xs3>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Number'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs9>
            <v-text-field
              placeholder="example"
              type="text"
              v-model="action.text"
              reverse
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Don\'t Include File Extension'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs1>
            <v-switch
              v-model="action.dontIncludeFileExtension"
            ></v-switch>
          </v-flex>
        </v-layout>
      </div>
      <div v-if="action.name === 'Set Low Power Mode'">
        <v-layout>
          <v-flex xs11>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Low Power Mode'"></v-list-tile-title>
            </v-list-tile-content>
          </v-flex>
          <v-flex xs1>
            <v-switch
              v-model="action.value"
            ></v-switch>
          </v-flex>
        </v-layout>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
    }
  },
  props: [
    'action'
  ],
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  name: 'action-item',
  methods: {
    ...mapMutations(['removeAction']),
    removeActionLocal (action) {
      console.log(action.id)
      this.removeAction(action.id)
    }

  }
}
</script>