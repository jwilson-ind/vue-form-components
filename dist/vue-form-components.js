import * as tv from "vue";
import { withDirectives as nn, openBlock as I, createElementBlock as W, createElementVNode as Y, toDisplayString as Ce, vShow as Zn, computed as te, isRef as Xo, vModelCheckbox as Zo, unref as K, createBlock as Oe, withKeys as Ht, withModifiers as Ve, renderSlot as Fe, createVNode as ve, Fragment as $t, renderList as Wt, createCommentVNode as ge, Transition as No, withCtx as Ct, createTextVNode as Lt, ref as ie, watch as lt, onMounted as et, normalizeClass as qe, vModelRadio as nv, normalizeStyle as jl, nextTick as vi, defineComponent as ft, toRefs as rv, onBeforeUnmount as iv, onActivated as lv, onDeactivated as av, h as Ze, cloneVNode as uv, inject as qt, provide as rn, watchEffect as Bt, onUnmounted as wn, Teleport as ov, reactive as sv } from "vue";
const fv = { class: "text-sm text-red-600" }, dv = {
  __name: "InputError",
  props: ["message"],
  setup(r) {
    return (u, i) => nn((I(), W("div", null, [
      Y("p", fv, Ce(r.message), 1)
    ], 512)), [
      [Zn, r.message]
    ]);
  }
}, cv = ["id", "value"], hv = {
  __name: "Checkbox",
  props: {
    id: {},
    checked: {
      type: [Array, Boolean],
      default: !1
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(r, { emit: u }) {
    const i = r, c = te({
      get() {
        return i.checked;
      },
      set(g) {
        u("update:checked", g);
      }
    });
    return (g, v) => nn((I(), W("input", {
      id: r.id,
      type: "checkbox",
      value: r.value,
      "onUpdate:modelValue": v[0] || (v[0] = (h) => Xo(c) ? c.value = h : null)
    }, null, 8, cv)), [
      [Zo, K(c)]
    ]);
  }
};
function Wl(r) {
  return r === 0 ? !1 : Array.isArray(r) && r.length === 0 ? !0 : !r;
}
function pv(r) {
  return (...u) => !r(...u);
}
function mv(r, u) {
  return r === void 0 && (r = "undefined"), r === null && (r = "null"), r === !1 && (r = "false"), r.toString().toLowerCase().indexOf(u.trim()) !== -1;
}
function Jo(r, u, i, c) {
  return u ? r.filter((g) => mv(c(g, i), u)).sort((g, v) => c(g, i).length - c(v, i).length) : r;
}
function gv(r) {
  return r.filter((u) => !u.$isLabel);
}
function zl(r, u) {
  return (i) => i.reduce((c, g) => g[r] && g[r].length ? (c.push({
    $groupLabel: g[u],
    $isLabel: !0
  }), c.concat(g[r])) : c, []);
}
function vv(r, u, i, c, g) {
  return (v) => v.map((h) => {
    if (!h[i])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const b = Jo(h[i], r, u, g);
    return b.length ? {
      [c]: h[c],
      [i]: b
    } : [];
  });
}
const Uo = (...r) => (u) => r.reduce((i, c) => c(i), u);
var yv = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(r, u) {
        return Wl(r) ? "" : u ? r[u] : r;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const r = this.search || "", u = r.toLowerCase().trim();
      let i = this.options.concat();
      return this.internalSearch ? i = this.groupValues ? this.filterAndFlat(i, u, this.label) : Jo(i, u, this.label, this.customLabel) : i = this.groupValues ? zl(this.groupValues, this.groupLabel)(i) : i, i = this.hideSelected ? i.filter(pv(this.isSelected)) : i, this.taggable && u.length && !this.isExistingOption(u) && (this.tagPosition === "bottom" ? i.push({ isTag: !0, label: r }) : i.unshift({ isTag: !0, label: r })), i.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((r) => r[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((u) => this.customLabel(u, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(r, u, i) {
      return Uo(
        vv(u, i, this.groupValues, this.groupLabel, this.customLabel),
        zl(this.groupValues, this.groupLabel)
      )(r);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(r) {
      return Uo(
        zl(this.groupValues, this.groupLabel),
        gv
      )(r);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(r) {
      this.search = r;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(r) {
      return this.options ? this.optionKeys.indexOf(r) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(r) {
      const u = this.trackBy ? r[this.trackBy] : r;
      return this.valueKeys.indexOf(u) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(r) {
      return !!r.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(r) {
      if (Wl(r))
        return "";
      if (r.isTag)
        return r.label;
      if (r.$isLabel)
        return r.$groupLabel;
      const u = this.customLabel(r, this.label);
      return Wl(u) ? "" : u;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(r, u) {
      if (r.$isLabel && this.groupSelect) {
        this.selectGroup(r);
        return;
      }
      if (!(this.blockKeys.indexOf(u) !== -1 || this.disabled || r.$isDisabled || r.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(u === "Tab" && !this.pointerDirty)) {
        if (r.isTag)
          this.$emit("tag", r.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(r)) {
            u !== "Tab" && this.removeElement(r);
            return;
          }
          this.$emit("select", r, this.id), this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([r])) : this.$emit("update:modelValue", r), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(r) {
      const u = this.options.find((i) => i[this.groupLabel] === r.$groupLabel);
      if (u) {
        if (this.wholeGroupSelected(u)) {
          this.$emit("remove", u[this.groupValues], this.id);
          const i = this.internalValue.filter(
            (c) => u[this.groupValues].indexOf(c) === -1
          );
          this.$emit("update:modelValue", i);
        } else {
          const i = u[this.groupValues].filter(
            (c) => !(this.isOptionDisabled(c) || this.isSelected(c))
          );
          this.$emit("select", i, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(i)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(r) {
      return r[this.groupValues].every(
        (u) => this.isSelected(u) || this.isOptionDisabled(u)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(r) {
      return r[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(r, u = !0) {
      if (this.disabled || r.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const i = typeof r == "object" ? this.valueKeys.indexOf(r[this.trackBy]) : this.valueKeys.indexOf(r);
      if (this.$emit("remove", r, this.id), this.multiple) {
        const c = this.internalValue.slice(0, i).concat(this.internalValue.slice(i + 1));
        this.$emit("update:modelValue", c);
      } else
        this.$emit("update:modelValue", null);
      this.closeOnSelect && u && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search && this.$refs.search.blur() : this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u")
        return;
      const r = this.$el.getBoundingClientRect().top, u = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      u > this.maxHeight || u > r || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(u - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(r - 40, this.maxHeight));
    }
  }
}, bv = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(r, u) {
      return {
        "multiselect__option--highlight": r === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(u)
      };
    },
    groupHighlight(r, u) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": u.$isLabel }
        ];
      const i = this.options.find((c) => c[this.groupLabel] === u.$groupLabel);
      return i && !this.wholeGroupDisabled(i) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": r === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(i) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: r } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], r), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(r) {
      this.pointer = r, this.pointerDirty = !0;
    }
  }
}, Sr = {
  name: "vue-multiselect",
  mixins: [yv, bv],
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (r) => `and ${r} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    }
  }
};
const wv = {
  ref: "tags",
  class: "multiselect__tags"
}, xv = { class: "multiselect__tags-wrap" }, Sv = { class: "multiselect__spinner" }, Av = { key: 0 }, Ov = { class: "multiselect__option" }, Ev = { class: "multiselect__option" }, _v = /* @__PURE__ */ Lt("No elements found. Consider changing the search query."), Cv = { class: "multiselect__option" }, Lv = /* @__PURE__ */ Lt("List is empty.");
function Tv(r, u, i, c, g, v) {
  return I(), Oe("div", {
    tabindex: r.searchable ? -1 : i.tabindex,
    class: [{ "multiselect--active": r.isOpen, "multiselect--disabled": i.disabled, "multiselect--above": v.isAbove }, "multiselect"],
    onFocus: u[14] || (u[14] = (h) => r.activate()),
    onBlur: u[15] || (u[15] = (h) => r.searchable ? !1 : r.deactivate()),
    onKeydown: [
      u[16] || (u[16] = Ht(Ve((h) => r.pointerForward(), ["self", "prevent"]), ["down"])),
      u[17] || (u[17] = Ht(Ve((h) => r.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: u[18] || (u[18] = Ht(Ve((h) => r.addPointerElement(h), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: u[19] || (u[19] = Ht((h) => r.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + r.id
  }, [
    Fe(r.$slots, "caret", { toggle: r.toggle }, () => [
      ve(
        "div",
        {
          onMousedown: u[1] || (u[1] = Ve((h) => r.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* HYDRATE_EVENTS */
      )
    ]),
    Fe(r.$slots, "clear", { search: r.search }),
    ve(
      "div",
      wv,
      [
        Fe(r.$slots, "selection", {
          search: r.search,
          remove: r.removeElement,
          values: v.visibleValues,
          isOpen: r.isOpen
        }, () => [
          nn(ve(
            "div",
            xv,
            [
              (I(!0), Oe(
                $t,
                null,
                Wt(v.visibleValues, (h, b) => Fe(r.$slots, "tag", {
                  option: h,
                  search: r.search,
                  remove: r.removeElement
                }, () => [
                  (I(), Oe("span", {
                    class: "multiselect__tag",
                    key: b
                  }, [
                    ve("span", {
                      textContent: Ce(r.getOptionLabel(h))
                    }, null, 8, ["textContent"]),
                    ve("i", {
                      tabindex: "1",
                      onKeypress: Ht(Ve((A) => r.removeElement(h), ["prevent"]), ["enter"]),
                      onMousedown: Ve((A) => r.removeElement(h), ["prevent"]),
                      class: "multiselect__tag-icon"
                    }, null, 40, ["onKeypress", "onMousedown"])
                  ]))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [Zn, v.visibleValues.length > 0]
          ]),
          r.internalValue && r.internalValue.length > i.limit ? Fe(r.$slots, "limit", { key: 0 }, () => [
            ve("strong", {
              class: "multiselect__strong",
              textContent: Ce(i.limitText(r.internalValue.length - i.limit))
            }, null, 8, ["textContent"])
          ]) : ge("v-if", !0)
        ]),
        ve(No, { name: "multiselect__loading" }, {
          default: Ct(() => [
            Fe(r.$slots, "loading", {}, () => [
              nn(ve(
                "div",
                Sv,
                null,
                512
                /* NEED_PATCH */
              ), [
                [Zn, i.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        r.searchable ? (I(), Oe("input", {
          key: 0,
          ref: "search",
          name: i.name,
          id: r.id,
          type: "text",
          autocomplete: "off",
          spellcheck: "false",
          placeholder: r.placeholder,
          style: v.inputStyle,
          value: r.search,
          disabled: i.disabled,
          tabindex: i.tabindex,
          onInput: u[2] || (u[2] = (h) => r.updateSearch(h.target.value)),
          onFocus: u[3] || (u[3] = Ve((h) => r.activate(), ["prevent"])),
          onBlur: u[4] || (u[4] = Ve((h) => r.deactivate(), ["prevent"])),
          onKeyup: u[5] || (u[5] = Ht((h) => r.deactivate(), ["esc"])),
          onKeydown: [
            u[6] || (u[6] = Ht(Ve((h) => r.pointerForward(), ["prevent"]), ["down"])),
            u[7] || (u[7] = Ht(Ve((h) => r.pointerBackward(), ["prevent"]), ["up"])),
            u[9] || (u[9] = Ht(Ve((h) => r.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: u[8] || (u[8] = Ht(Ve((h) => r.addPointerElement(h), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + r.id
        }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : ge("v-if", !0),
        v.isSingleLabelVisible ? (I(), Oe(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: u[10] || (u[10] = Ve((...h) => r.toggle && r.toggle(...h), ["prevent"]))
          },
          [
            Fe(r.$slots, "singleLabel", { option: v.singleValue }, () => [
              Lt(
                Ce(r.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        )) : ge("v-if", !0),
        v.isPlaceholderVisible ? (I(), Oe(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: u[11] || (u[11] = Ve((...h) => r.toggle && r.toggle(...h), ["prevent"]))
          },
          [
            Fe(r.$slots, "placeholder", {}, () => [
              Lt(
                Ce(r.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        )) : ge("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    ve(No, { name: "multiselect" }, {
      default: Ct(() => [
        nn(ve(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: u[12] || (u[12] = (...h) => r.activate && r.activate(...h)),
            tabindex: "-1",
            onMousedown: u[13] || (u[13] = Ve(() => {
            }, ["prevent"])),
            style: { maxHeight: r.optimizedHeight + "px" },
            ref: "list"
          },
          [
            ve("ul", {
              class: "multiselect__content",
              style: v.contentStyle,
              role: "listbox",
              id: "listbox-" + r.id
            }, [
              Fe(r.$slots, "beforeList"),
              r.multiple && r.max === r.internalValue.length ? (I(), Oe("li", Av, [
                ve("span", Ov, [
                  Fe(r.$slots, "maxElements", {}, () => [
                    Lt(
                      "Maximum of " + Ce(r.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : ge("v-if", !0),
              !r.max || r.internalValue.length < r.max ? (I(!0), Oe(
                $t,
                { key: 1 },
                Wt(r.filteredOptions, (h, b) => (I(), Oe("li", {
                  class: "multiselect__element",
                  key: b,
                  id: r.id + "-" + b,
                  role: h && (h.$isLabel || h.$isDisabled) ? null : "option"
                }, [
                  h && (h.$isLabel || h.$isDisabled) ? ge("v-if", !0) : (I(), Oe("span", {
                    key: 0,
                    class: [r.optionHighlight(b, h), "multiselect__option"],
                    onClick: Ve((A) => r.select(h), ["stop"]),
                    onMouseenter: Ve((A) => r.pointerSet(b), ["self"]),
                    "data-select": h && h.isTag ? r.tagPlaceholder : v.selectLabelText,
                    "data-selected": v.selectedLabelText,
                    "data-deselect": v.deselectLabelText
                  }, [
                    Fe(r.$slots, "option", {
                      option: h,
                      search: r.search,
                      index: b
                    }, () => [
                      ve(
                        "span",
                        null,
                        Ce(r.getOptionLabel(h)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
                  h && (h.$isLabel || h.$isDisabled) ? (I(), Oe("span", {
                    key: 1,
                    "data-select": r.groupSelect && v.selectGroupLabelText,
                    "data-deselect": r.groupSelect && v.deselectGroupLabelText,
                    class: [r.groupHighlight(b, h), "multiselect__option"],
                    onMouseenter: Ve((A) => r.groupSelect && r.pointerSet(b), ["self"]),
                    onMousedown: Ve((A) => r.selectGroup(h), ["prevent"])
                  }, [
                    Fe(r.$slots, "option", {
                      option: h,
                      search: r.search,
                      index: b
                    }, () => [
                      ve(
                        "span",
                        null,
                        Ce(r.getOptionLabel(h)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : ge("v-if", !0)
                ], 8, ["id", "role"]))),
                128
                /* KEYED_FRAGMENT */
              )) : ge("v-if", !0),
              nn(ve(
                "li",
                null,
                [
                  ve("span", Ev, [
                    Fe(r.$slots, "noResult", { search: r.search }, () => [
                      _v
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Zn, i.showNoResults && r.filteredOptions.length === 0 && r.search && !i.loading]
              ]),
              nn(ve(
                "li",
                null,
                [
                  ve("span", Cv, [
                    Fe(r.$slots, "noOptions", {}, () => [
                      Lv
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Zn, i.showNoOptions && r.options.length === 0 && !r.search && !i.loading]
              ]),
              Fe(r.$slots, "afterList")
            ], 12, ["id"])
          ],
          36
          /* STYLE, HYDRATE_EVENTS */
        ), [
          [Zn, r.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Sr.render = Tv;
const $v = { class: "field-select" }, Qo = {
  __name: "FieldSelect",
  props: {
    modelValue: {},
    multiple: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    options: {
      default() {
        return [];
      }
    },
    field: {
      default() {
        return "id";
      }
    },
    label: {
      default() {
        return "name";
      }
    },
    placeholder: {
      default() {
        return "Select";
      }
    },
    disabled: {
      default() {
        return !1;
      }
    },
    loading: {
      default() {
        return !1;
      }
    }
  },
  emits: ["update:modelValue", "searchChange"],
  setup(r, { emit: u }) {
    const i = r, c = ie(g(i.modelValue));
    function g(h) {
      if (i.multiple) {
        const b = Array.isArray(h) ? h[0] && h[0].hasOwnProperty(i.field) ? h.map((A) => A[i.field]) : h : [h];
        return i.options.filter((A) => b.indexOf(A[i.field]) > -1);
      }
      return i.options.find((b) => b[i.field] == h);
    }
    function v(h, b) {
      return i.multiple ? JSON.stringify(h.map((A) => A[i.field]).sort()) == JSON.stringify((Array.isArray(b) ? b[0] && b[0].hasOwnProperty(i.field) ? b.map((A) => A[i.field]) : b : [b]).sort()) : h && b == h[i.field];
    }
    return lt(c, (h) => {
      if (!v(h, i.modelValue)) {
        const b = h ? i.multiple ? h.map((A) => A[i.field]) : h[i.field] : null;
        u("update:modelValue", b);
      }
    }), lt(() => i.modelValue, (h) => {
      v(c.value, h) || (c.value = g(h));
    }), lt(() => i.options, () => {
      (!c.value || !c.value.length) && (c.value = g(i.modelValue));
    }), (h, b) => (I(), W("div", $v, [
      ve(K(Sr), {
        modelValue: c.value,
        "onUpdate:modelValue": b[0] || (b[0] = (A) => c.value = A),
        options: r.options,
        label: r.label,
        "track-by": r.field,
        placeholder: r.placeholder,
        multiple: r.multiple,
        "show-labels": !1,
        disabled: r.disabled,
        loading: r.loading,
        "show-no-options": !1,
        onSearchChange: b[1] || (b[1] = (A) => u("searchChange", A))
      }, null, 8, ["modelValue", "options", "label", "track-by", "placeholder", "multiple", "disabled", "loading"])
    ]));
  }
}, kv = {
  __name: "AsyncSelect",
  props: {
    modelValue: {},
    url: {
      type: String,
      required: !0
    },
    id: {
      type: String,
      default() {
        return Math.random().toString(36).slice(2);
      }
    },
    multiple: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    field: {
      type: String
    },
    label: {
      type: String,
      required: !0
    },
    searchColumns: {
      type: Array,
      default() {
        return [];
      }
    },
    filters: {
      type: Array
    },
    limit: {
      type: Number,
      default: 50
    },
    preload: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      default() {
        return "Select";
      }
    },
    disabled: {
      default() {
        return !1;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: u }) {
    const i = r, c = ie(i.modelValue);
    lt(() => i.modelValue, (A) => {
      c.value = A;
    });
    const g = ie([]), v = ie(!1);
    et(() => {
      let A = [];
      if (i.modelValue) {
        const _ = i.field ?? "id";
        let T = i.modelValue.hasOwnProperty(_) ? i.modelValue[_] : i.modelValue;
        T = Array.isArray(T) && T[0] && T[0].hasOwnProperty(i.field) ? T.map((V) => V[i.field]) : T;
        const B = i.multiple && Array.isArray(T) ? "in" : "=";
        T && A.push({ column: _, operator: B, value: T });
      }
      i.preload && A.push({ logic: A.length ? "or" : "and", column: i.field ?? "id", operator: "!=", value: 0 }), A.length && b(A);
    });
    function h(A) {
      if (A && A !== "") {
        const _ = i.filters ? i.filters.map((T) => (T.value = A, T)) : i.searchColumns.length ? [{ rawColumn: i.searchColumns.join(" || ' ' || "), operator: "contains", value: A }] : [{ column: i.field ?? i.label, operator: "contains", value: A }];
        b(_);
      }
    }
    function b(A) {
      v.value = !0, axios.post(i.url, {
        search: A,
        limit: i.limit
      }).then((_) => {
        _.data.success && _.data.records && (g.value = _.data.records), v.value = !1;
      });
    }
    return (A, _) => r.field ? (I(), Oe(Qo, {
      key: 0,
      id: r.id,
      modelValue: c.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = (T) => c.value = T),
        _[1] || (_[1] = (T) => A.$emit("update:modelValue", T))
      ],
      field: r.field,
      label: r.label,
      options: g.value,
      multiple: r.multiple,
      placeholder: r.placeholder,
      disabled: r.disabled,
      loading: v.value,
      onSearchChange: h
    }, null, 8, ["id", "modelValue", "field", "label", "options", "multiple", "placeholder", "disabled", "loading"])) : (I(), Oe(K(Sr), {
      key: 1,
      id: r.id,
      modelValue: c.value,
      "onUpdate:modelValue": [
        _[2] || (_[2] = (T) => c.value = T),
        _[3] || (_[3] = (T) => A.$emit("update:modelValue", T))
      ],
      label: r.label,
      options: g.value,
      multiple: r.multiple,
      placeholder: r.placeholder,
      disabled: r.disabled,
      loading: v.value,
      "show-no-options": !1,
      onSearchChange: h
    }, null, 8, ["id", "modelValue", "label", "options", "multiple", "placeholder", "disabled", "loading"]));
  }
};
function ra(r) {
  return typeof r == "string" ? r.replaceAll(".", " ").replaceAll("_", " ").replace(/\w\S*/g, function(u) {
    return u.charAt(0).toUpperCase() + u.substring(1).toLowerCase();
  }) : "";
}
const Dv = ["for"], Pv = ["id", "value", "disabled"], Iv = ["id", "value", "disabled"], Rv = { class: "cursor-pointer ml-2 align-middle" }, Bv = ["value", "disabled"], Vv = /* @__PURE__ */ Y("option", { value: null }, "select...", -1), Fv = ["value"], Mv = {
  __name: "Select",
  props: {
    modelValue: {},
    id: {
      type: String,
      default() {
        return Math.random().toString(36).slice(2);
      }
    },
    type: {
      type: String
    },
    multiple: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    url: {
      type: String
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    field: {
      type: String
    },
    label: {
      type: String
    },
    filters: {
      type: Array
    },
    searchColumns: {
      type: Array
    },
    limit: {
      type: Number
    },
    preload: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      default() {
        return "Select";
      }
    },
    disabled: {
      default() {
        return !1;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: u }) {
    const i = r, c = ie(Array.isArray(i.modelValue) ? i.modelValue : []);
    lt(c, (A) => {
      u("update:modelValue", A);
    });
    const g = ie(i.modelValue);
    lt(() => i.modelValue, (A) => {
      g.value = A;
    });
    const v = te(() => i.options ? i.options.filter((A) => !!A) : []), h = te(() => typeof v.value[0] && typeof v.value[0] == "object" && v.value[0].hasOwnProperty(i.field ?? "id") && v.value[0].hasOwnProperty(i.label ?? "name"));
    function b(A) {
      return typeof A == "string" ? ra(A) : A;
    }
    return (A, _) => r.type === "list" ? (I(!0), W($t, { key: 0 }, Wt(K(v), (T, B) => (I(), W("label", {
      for: r.id + "_list_item_" + B,
      class: qe([r.multiple ? "checkbox-label" : "radio-label", { disabled: r.disabled }])
    }, [
      r.multiple ? nn((I(), W("input", {
        key: 0,
        id: r.id + "_list_item_" + B,
        class: "input-checkbox",
        type: "checkbox",
        value: K(h) ? T[r.field ?? "id"] : T,
        disabled: r.disabled,
        "onUpdate:modelValue": _[0] || (_[0] = (V) => c.value = V)
      }, null, 8, Pv)), [
        [Zo, c.value]
      ]) : nn((I(), W("input", {
        key: 1,
        id: r.id + "_list_item_" + B,
        class: "input-radio",
        type: "radio",
        value: K(h) ? T[r.field ?? "id"] : T,
        disabled: r.disabled,
        "onUpdate:modelValue": _[1] || (_[1] = (V) => g.value = V),
        onChange: _[2] || (_[2] = (V) => A.$emit("update:modelValue", V.target.value))
      }, null, 40, Iv)), [
        [nv, g.value]
      ]),
      Y("span", Rv, Ce(K(h) ? T[r.label ?? "name"] : b(T)), 1)
    ], 10, Dv))), 256)) : r.type === "async" ? (I(), Oe(kv, {
      key: 1,
      url: r.url,
      modelValue: g.value,
      "onUpdate:modelValue": [
        _[3] || (_[3] = (T) => g.value = T),
        _[4] || (_[4] = (T) => A.$emit("update:modelValue", T))
      ],
      multiple: r.multiple,
      field: r.field,
      label: r.label,
      filters: r.filters,
      "search-columns": r.searchColumns,
      limit: r.limit,
      preload: r.preload,
      placeholder: r.placeholder,
      disabled: r.disabled
    }, null, 8, ["url", "modelValue", "multiple", "field", "label", "filters", "search-columns", "limit", "preload", "placeholder", "disabled"])) : K(h) ? (I(), Oe(Qo, {
      key: 2,
      modelValue: g.value,
      "onUpdate:modelValue": [
        _[5] || (_[5] = (T) => g.value = T),
        _[6] || (_[6] = (T) => A.$emit("update:modelValue", T))
      ],
      multiple: r.multiple,
      field: r.field,
      label: r.label,
      options: K(v),
      placeholder: r.placeholder,
      disabled: r.disabled
    }, null, 8, ["modelValue", "multiple", "field", "label", "options", "placeholder", "disabled"])) : r.type === "basic" ? (I(), W("select", {
      key: 3,
      class: "input-select",
      value: r.modelValue,
      disabled: r.disabled,
      onChange: _[7] || (_[7] = (T) => A.$emit("update:modelValue", T.target.value))
    }, [
      Vv,
      (I(!0), W($t, null, Wt(K(v), (T) => (I(), W("option", { value: T }, Ce(b(T)), 9, Fv))), 256))
    ], 40, Bv)) : (I(), Oe(K(Sr), {
      key: 4,
      modelValue: g.value,
      "onUpdate:modelValue": [
        _[8] || (_[8] = (T) => g.value = T),
        _[9] || (_[9] = (T) => A.$emit("update:modelValue", T))
      ],
      options: K(v),
      placeholder: r.placeholder,
      multiple: r.multiple,
      "show-labels": !1,
      disabled: r.disabled
    }, null, 8, ["modelValue", "options", "placeholder", "multiple", "disabled"]));
  }
};
var Jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nv(r) {
  if (r.__esModule)
    return r;
  var u = r.default;
  if (typeof u == "function") {
    var i = function c() {
      if (this instanceof c) {
        var g = [null];
        g.push.apply(g, arguments);
        var v = Function.bind.apply(u, g);
        return new v();
      }
      return u.apply(this, arguments);
    };
    i.prototype = u.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(r).forEach(function(c) {
    var g = Object.getOwnPropertyDescriptor(r, c);
    Object.defineProperty(i, c, g.get ? g : {
      enumerable: !0,
      get: function() {
        return r[c];
      }
    });
  }), i;
}
var yn = {}, Uv = {
  get exports() {
    return yn;
  },
  set exports(r) {
    yn = r;
  }
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(r, u) {
  (function() {
    var i, c = "4.17.21", g = 200, v = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", b = "Invalid `variable` option passed into `_.template`", A = "__lodash_hash_undefined__", _ = 500, T = "__lodash_placeholder__", B = 1, V = 2, z = 4, q = 1, Ie = 2, ye = 1, Ue = 2, Ee = 4, fe = 8, U = 16, xe = 32, F = 64, N = 128, G = 256, le = 512, de = 30, $e = "...", Vt = 800, Ft = 16, ln = 1, S = 2, f = 3, d = 1 / 0, m = 9007199254740991, E = 17976931348623157e292, C = 0 / 0, P = 4294967295, ae = P - 1, me = P >>> 1, be = [
      ["ary", N],
      ["bind", ye],
      ["bindKey", Ue],
      ["curry", fe],
      ["curryRight", U],
      ["flip", le],
      ["partial", xe],
      ["partialRight", F],
      ["rearg", G]
    ], Q = "[object Arguments]", ke = "[object Array]", ue = "[object AsyncFunction]", he = "[object Boolean]", Ge = "[object Date]", dt = "[object DOMException]", He = "[object Error]", je = "[object Function]", an = "[object GeneratorFunction]", Re = "[object Map]", tt = "[object Number]", oa = "[object Null]", Gt = "[object Object]", sa = "[object Promise]", ys = "[object Proxy]", tr = "[object RegExp]", kt = "[object Set]", nr = "[object String]", Or = "[object Symbol]", bs = "[object Undefined]", rr = "[object WeakMap]", ws = "[object WeakSet]", ir = "[object ArrayBuffer]", Rn = "[object DataView]", Si = "[object Float32Array]", Ai = "[object Float64Array]", Oi = "[object Int8Array]", Ei = "[object Int16Array]", _i = "[object Int32Array]", Ci = "[object Uint8Array]", Li = "[object Uint8ClampedArray]", Ti = "[object Uint16Array]", $i = "[object Uint32Array]", xs = /\b__p \+= '';/g, Ss = /\b(__p \+=) '' \+/g, As = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fa = /&(?:amp|lt|gt|quot|#39);/g, da = /[&<>"']/g, Os = RegExp(fa.source), Es = RegExp(da.source), _s = /<%-([\s\S]+?)%>/g, Cs = /<%([\s\S]+?)%>/g, ca = /<%=([\s\S]+?)%>/g, Ls = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ts = /^\w*$/, $s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ki = /[\\^$.*+?()[\]{}|]/g, ks = RegExp(ki.source), Di = /^\s+/, Ds = /\s/, Ps = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Is = /\{\n\/\* \[wrapped with (.+)\] \*/, Rs = /,? & /, Bs = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vs = /[()=,{}\[\]\/\s]/, Fs = /\\(\\)?/g, Ms = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ha = /\w*$/, Ns = /^[-+]0x[0-9a-f]+$/i, Us = /^0b[01]+$/i, Hs = /^\[object .+?Constructor\]$/, Ws = /^0o[0-7]+$/i, zs = /^(?:0|[1-9]\d*)$/, qs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Er = /($^)/, Gs = /['\n\r\u2028\u2029\\]/g, _r = "\\ud800-\\udfff", Ks = "\\u0300-\\u036f", js = "\\ufe20-\\ufe2f", Ys = "\\u20d0-\\u20ff", pa = Ks + js + Ys, ma = "\\u2700-\\u27bf", ga = "a-z\\xdf-\\xf6\\xf8-\\xff", Xs = "\\xac\\xb1\\xd7\\xf7", Zs = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Js = "\\u2000-\\u206f", Qs = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", va = "A-Z\\xc0-\\xd6\\xd8-\\xde", ya = "\\ufe0e\\ufe0f", ba = Xs + Zs + Js + Qs, Pi = "['’]", ef = "[" + _r + "]", wa = "[" + ba + "]", Cr = "[" + pa + "]", xa = "\\d+", tf = "[" + ma + "]", Sa = "[" + ga + "]", Aa = "[^" + _r + ba + xa + ma + ga + va + "]", Ii = "\\ud83c[\\udffb-\\udfff]", nf = "(?:" + Cr + "|" + Ii + ")", Oa = "[^" + _r + "]", Ri = "(?:\\ud83c[\\udde6-\\uddff]){2}", Bi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bn = "[" + va + "]", Ea = "\\u200d", _a = "(?:" + Sa + "|" + Aa + ")", rf = "(?:" + Bn + "|" + Aa + ")", Ca = "(?:" + Pi + "(?:d|ll|m|re|s|t|ve))?", La = "(?:" + Pi + "(?:D|LL|M|RE|S|T|VE))?", Ta = nf + "?", $a = "[" + ya + "]?", lf = "(?:" + Ea + "(?:" + [Oa, Ri, Bi].join("|") + ")" + $a + Ta + ")*", af = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", uf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ka = $a + Ta + lf, of = "(?:" + [tf, Ri, Bi].join("|") + ")" + ka, sf = "(?:" + [Oa + Cr + "?", Cr, Ri, Bi, ef].join("|") + ")", ff = RegExp(Pi, "g"), df = RegExp(Cr, "g"), Vi = RegExp(Ii + "(?=" + Ii + ")|" + sf + ka, "g"), cf = RegExp([
      Bn + "?" + Sa + "+" + Ca + "(?=" + [wa, Bn, "$"].join("|") + ")",
      rf + "+" + La + "(?=" + [wa, Bn + _a, "$"].join("|") + ")",
      Bn + "?" + _a + "+" + Ca,
      Bn + "+" + La,
      uf,
      af,
      xa,
      of
    ].join("|"), "g"), hf = RegExp("[" + Ea + _r + pa + ya + "]"), pf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, mf = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], gf = -1, Te = {};
    Te[Si] = Te[Ai] = Te[Oi] = Te[Ei] = Te[_i] = Te[Ci] = Te[Li] = Te[Ti] = Te[$i] = !0, Te[Q] = Te[ke] = Te[ir] = Te[he] = Te[Rn] = Te[Ge] = Te[He] = Te[je] = Te[Re] = Te[tt] = Te[Gt] = Te[tr] = Te[kt] = Te[nr] = Te[rr] = !1;
    var Le = {};
    Le[Q] = Le[ke] = Le[ir] = Le[Rn] = Le[he] = Le[Ge] = Le[Si] = Le[Ai] = Le[Oi] = Le[Ei] = Le[_i] = Le[Re] = Le[tt] = Le[Gt] = Le[tr] = Le[kt] = Le[nr] = Le[Or] = Le[Ci] = Le[Li] = Le[Ti] = Le[$i] = !0, Le[He] = Le[je] = Le[rr] = !1;
    var vf = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, yf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, bf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, wf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, xf = parseFloat, Sf = parseInt, Da = typeof Jn == "object" && Jn && Jn.Object === Object && Jn, Af = typeof self == "object" && self && self.Object === Object && self, Ye = Da || Af || Function("return this")(), Fi = u && !u.nodeType && u, xn = Fi && !0 && r && !r.nodeType && r, Pa = xn && xn.exports === Fi, Mi = Pa && Da.process, bt = function() {
      try {
        var w = xn && xn.require && xn.require("util").types;
        return w || Mi && Mi.binding && Mi.binding("util");
      } catch {
      }
    }(), Ia = bt && bt.isArrayBuffer, Ra = bt && bt.isDate, Ba = bt && bt.isMap, Va = bt && bt.isRegExp, Fa = bt && bt.isSet, Ma = bt && bt.isTypedArray;
    function ct(w, L, O) {
      switch (O.length) {
        case 0:
          return w.call(L);
        case 1:
          return w.call(L, O[0]);
        case 2:
          return w.call(L, O[0], O[1]);
        case 3:
          return w.call(L, O[0], O[1], O[2]);
      }
      return w.apply(L, O);
    }
    function Of(w, L, O, M) {
      for (var J = -1, we = w == null ? 0 : w.length; ++J < we; ) {
        var We = w[J];
        L(M, We, O(We), w);
      }
      return M;
    }
    function wt(w, L) {
      for (var O = -1, M = w == null ? 0 : w.length; ++O < M && L(w[O], O, w) !== !1; )
        ;
      return w;
    }
    function Ef(w, L) {
      for (var O = w == null ? 0 : w.length; O-- && L(w[O], O, w) !== !1; )
        ;
      return w;
    }
    function Na(w, L) {
      for (var O = -1, M = w == null ? 0 : w.length; ++O < M; )
        if (!L(w[O], O, w))
          return !1;
      return !0;
    }
    function un(w, L) {
      for (var O = -1, M = w == null ? 0 : w.length, J = 0, we = []; ++O < M; ) {
        var We = w[O];
        L(We, O, w) && (we[J++] = We);
      }
      return we;
    }
    function Lr(w, L) {
      var O = w == null ? 0 : w.length;
      return !!O && Vn(w, L, 0) > -1;
    }
    function Ni(w, L, O) {
      for (var M = -1, J = w == null ? 0 : w.length; ++M < J; )
        if (O(L, w[M]))
          return !0;
      return !1;
    }
    function De(w, L) {
      for (var O = -1, M = w == null ? 0 : w.length, J = Array(M); ++O < M; )
        J[O] = L(w[O], O, w);
      return J;
    }
    function on(w, L) {
      for (var O = -1, M = L.length, J = w.length; ++O < M; )
        w[J + O] = L[O];
      return w;
    }
    function Ui(w, L, O, M) {
      var J = -1, we = w == null ? 0 : w.length;
      for (M && we && (O = w[++J]); ++J < we; )
        O = L(O, w[J], J, w);
      return O;
    }
    function _f(w, L, O, M) {
      var J = w == null ? 0 : w.length;
      for (M && J && (O = w[--J]); J--; )
        O = L(O, w[J], J, w);
      return O;
    }
    function Hi(w, L) {
      for (var O = -1, M = w == null ? 0 : w.length; ++O < M; )
        if (L(w[O], O, w))
          return !0;
      return !1;
    }
    var Cf = Wi("length");
    function Lf(w) {
      return w.split("");
    }
    function Tf(w) {
      return w.match(Bs) || [];
    }
    function Ua(w, L, O) {
      var M;
      return O(w, function(J, we, We) {
        if (L(J, we, We))
          return M = we, !1;
      }), M;
    }
    function Tr(w, L, O, M) {
      for (var J = w.length, we = O + (M ? 1 : -1); M ? we-- : ++we < J; )
        if (L(w[we], we, w))
          return we;
      return -1;
    }
    function Vn(w, L, O) {
      return L === L ? Uf(w, L, O) : Tr(w, Ha, O);
    }
    function $f(w, L, O, M) {
      for (var J = O - 1, we = w.length; ++J < we; )
        if (M(w[J], L))
          return J;
      return -1;
    }
    function Ha(w) {
      return w !== w;
    }
    function Wa(w, L) {
      var O = w == null ? 0 : w.length;
      return O ? qi(w, L) / O : C;
    }
    function Wi(w) {
      return function(L) {
        return L == null ? i : L[w];
      };
    }
    function zi(w) {
      return function(L) {
        return w == null ? i : w[L];
      };
    }
    function za(w, L, O, M, J) {
      return J(w, function(we, We, _e) {
        O = M ? (M = !1, we) : L(O, we, We, _e);
      }), O;
    }
    function kf(w, L) {
      var O = w.length;
      for (w.sort(L); O--; )
        w[O] = w[O].value;
      return w;
    }
    function qi(w, L) {
      for (var O, M = -1, J = w.length; ++M < J; ) {
        var we = L(w[M]);
        we !== i && (O = O === i ? we : O + we);
      }
      return O;
    }
    function Gi(w, L) {
      for (var O = -1, M = Array(w); ++O < w; )
        M[O] = L(O);
      return M;
    }
    function Df(w, L) {
      return De(L, function(O) {
        return [O, w[O]];
      });
    }
    function qa(w) {
      return w && w.slice(0, Ya(w) + 1).replace(Di, "");
    }
    function ht(w) {
      return function(L) {
        return w(L);
      };
    }
    function Ki(w, L) {
      return De(L, function(O) {
        return w[O];
      });
    }
    function lr(w, L) {
      return w.has(L);
    }
    function Ga(w, L) {
      for (var O = -1, M = w.length; ++O < M && Vn(L, w[O], 0) > -1; )
        ;
      return O;
    }
    function Ka(w, L) {
      for (var O = w.length; O-- && Vn(L, w[O], 0) > -1; )
        ;
      return O;
    }
    function Pf(w, L) {
      for (var O = w.length, M = 0; O--; )
        w[O] === L && ++M;
      return M;
    }
    var If = zi(vf), Rf = zi(yf);
    function Bf(w) {
      return "\\" + wf[w];
    }
    function Vf(w, L) {
      return w == null ? i : w[L];
    }
    function Fn(w) {
      return hf.test(w);
    }
    function Ff(w) {
      return pf.test(w);
    }
    function Mf(w) {
      for (var L, O = []; !(L = w.next()).done; )
        O.push(L.value);
      return O;
    }
    function ji(w) {
      var L = -1, O = Array(w.size);
      return w.forEach(function(M, J) {
        O[++L] = [J, M];
      }), O;
    }
    function ja(w, L) {
      return function(O) {
        return w(L(O));
      };
    }
    function sn(w, L) {
      for (var O = -1, M = w.length, J = 0, we = []; ++O < M; ) {
        var We = w[O];
        (We === L || We === T) && (w[O] = T, we[J++] = O);
      }
      return we;
    }
    function $r(w) {
      var L = -1, O = Array(w.size);
      return w.forEach(function(M) {
        O[++L] = M;
      }), O;
    }
    function Nf(w) {
      var L = -1, O = Array(w.size);
      return w.forEach(function(M) {
        O[++L] = [M, M];
      }), O;
    }
    function Uf(w, L, O) {
      for (var M = O - 1, J = w.length; ++M < J; )
        if (w[M] === L)
          return M;
      return -1;
    }
    function Hf(w, L, O) {
      for (var M = O + 1; M--; )
        if (w[M] === L)
          return M;
      return M;
    }
    function Mn(w) {
      return Fn(w) ? zf(w) : Cf(w);
    }
    function Dt(w) {
      return Fn(w) ? qf(w) : Lf(w);
    }
    function Ya(w) {
      for (var L = w.length; L-- && Ds.test(w.charAt(L)); )
        ;
      return L;
    }
    var Wf = zi(bf);
    function zf(w) {
      for (var L = Vi.lastIndex = 0; Vi.test(w); )
        ++L;
      return L;
    }
    function qf(w) {
      return w.match(Vi) || [];
    }
    function Gf(w) {
      return w.match(cf) || [];
    }
    var Kf = function w(L) {
      L = L == null ? Ye : Nn.defaults(Ye.Object(), L, Nn.pick(Ye, mf));
      var O = L.Array, M = L.Date, J = L.Error, we = L.Function, We = L.Math, _e = L.Object, Yi = L.RegExp, jf = L.String, xt = L.TypeError, kr = O.prototype, Yf = we.prototype, Un = _e.prototype, Dr = L["__core-js_shared__"], Pr = Yf.toString, Ae = Un.hasOwnProperty, Xf = 0, Xa = function() {
        var e = /[^.]+$/.exec(Dr && Dr.keys && Dr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ir = Un.toString, Zf = Pr.call(_e), Jf = Ye._, Qf = Yi(
        "^" + Pr.call(Ae).replace(ki, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Rr = Pa ? L.Buffer : i, fn = L.Symbol, Br = L.Uint8Array, Za = Rr ? Rr.allocUnsafe : i, Vr = ja(_e.getPrototypeOf, _e), Ja = _e.create, Qa = Un.propertyIsEnumerable, Fr = kr.splice, eu = fn ? fn.isConcatSpreadable : i, ar = fn ? fn.iterator : i, Sn = fn ? fn.toStringTag : i, Mr = function() {
        try {
          var e = Cn(_e, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), ed = L.clearTimeout !== Ye.clearTimeout && L.clearTimeout, td = M && M.now !== Ye.Date.now && M.now, nd = L.setTimeout !== Ye.setTimeout && L.setTimeout, Nr = We.ceil, Ur = We.floor, Xi = _e.getOwnPropertySymbols, rd = Rr ? Rr.isBuffer : i, tu = L.isFinite, id = kr.join, ld = ja(_e.keys, _e), ze = We.max, Je = We.min, ad = M.now, ud = L.parseInt, nu = We.random, od = kr.reverse, Zi = Cn(L, "DataView"), ur = Cn(L, "Map"), Ji = Cn(L, "Promise"), Hn = Cn(L, "Set"), or = Cn(L, "WeakMap"), sr = Cn(_e, "create"), Hr = or && new or(), Wn = {}, sd = Ln(Zi), fd = Ln(ur), dd = Ln(Ji), cd = Ln(Hn), hd = Ln(or), Wr = fn ? fn.prototype : i, fr = Wr ? Wr.valueOf : i, ru = Wr ? Wr.toString : i;
      function o(e) {
        if (Be(e) && !ee(e) && !(e instanceof ce)) {
          if (e instanceof St)
            return e;
          if (Ae.call(e, "__wrapped__"))
            return io(e);
        }
        return new St(e);
      }
      var zn = function() {
        function e() {
        }
        return function(t) {
          if (!Pe(t))
            return {};
          if (Ja)
            return Ja(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = i, n;
        };
      }();
      function zr() {
      }
      function St(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
      }
      o.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: _s,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Cs,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ca,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: o
        }
      }, o.prototype = zr.prototype, o.prototype.constructor = o, St.prototype = zn(zr.prototype), St.prototype.constructor = St;
      function ce(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = P, this.__views__ = [];
      }
      function pd() {
        var e = new ce(this.__wrapped__);
        return e.__actions__ = at(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = at(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = at(this.__views__), e;
      }
      function md() {
        if (this.__filtered__) {
          var e = new ce(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function gd() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = ee(e), l = t < 0, a = n ? e.length : 0, s = Lc(0, a, this.__views__), p = s.start, y = s.end, x = y - p, $ = l ? y : p - 1, k = this.__iteratees__, D = k.length, R = 0, H = Je(x, this.__takeCount__);
        if (!n || !l && a == x && H == x)
          return Cu(e, this.__actions__);
        var X = [];
        e:
          for (; x-- && R < H; ) {
            $ += t;
            for (var re = -1, Z = e[$]; ++re < D; ) {
              var se = k[re], pe = se.iteratee, gt = se.type, it = pe(Z);
              if (gt == S)
                Z = it;
              else if (!it) {
                if (gt == ln)
                  continue e;
                break e;
              }
            }
            X[R++] = Z;
          }
        return X;
      }
      ce.prototype = zn(zr.prototype), ce.prototype.constructor = ce;
      function An(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var l = e[t];
          this.set(l[0], l[1]);
        }
      }
      function vd() {
        this.__data__ = sr ? sr(null) : {}, this.size = 0;
      }
      function yd(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function bd(e) {
        var t = this.__data__;
        if (sr) {
          var n = t[e];
          return n === A ? i : n;
        }
        return Ae.call(t, e) ? t[e] : i;
      }
      function wd(e) {
        var t = this.__data__;
        return sr ? t[e] !== i : Ae.call(t, e);
      }
      function xd(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = sr && t === i ? A : t, this;
      }
      An.prototype.clear = vd, An.prototype.delete = yd, An.prototype.get = bd, An.prototype.has = wd, An.prototype.set = xd;
      function Kt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var l = e[t];
          this.set(l[0], l[1]);
        }
      }
      function Sd() {
        this.__data__ = [], this.size = 0;
      }
      function Ad(e) {
        var t = this.__data__, n = qr(t, e);
        if (n < 0)
          return !1;
        var l = t.length - 1;
        return n == l ? t.pop() : Fr.call(t, n, 1), --this.size, !0;
      }
      function Od(e) {
        var t = this.__data__, n = qr(t, e);
        return n < 0 ? i : t[n][1];
      }
      function Ed(e) {
        return qr(this.__data__, e) > -1;
      }
      function _d(e, t) {
        var n = this.__data__, l = qr(n, e);
        return l < 0 ? (++this.size, n.push([e, t])) : n[l][1] = t, this;
      }
      Kt.prototype.clear = Sd, Kt.prototype.delete = Ad, Kt.prototype.get = Od, Kt.prototype.has = Ed, Kt.prototype.set = _d;
      function jt(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var l = e[t];
          this.set(l[0], l[1]);
        }
      }
      function Cd() {
        this.size = 0, this.__data__ = {
          hash: new An(),
          map: new (ur || Kt)(),
          string: new An()
        };
      }
      function Ld(e) {
        var t = ri(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Td(e) {
        return ri(this, e).get(e);
      }
      function $d(e) {
        return ri(this, e).has(e);
      }
      function kd(e, t) {
        var n = ri(this, e), l = n.size;
        return n.set(e, t), this.size += n.size == l ? 0 : 1, this;
      }
      jt.prototype.clear = Cd, jt.prototype.delete = Ld, jt.prototype.get = Td, jt.prototype.has = $d, jt.prototype.set = kd;
      function On(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new jt(); ++t < n; )
          this.add(e[t]);
      }
      function Dd(e) {
        return this.__data__.set(e, A), this;
      }
      function Pd(e) {
        return this.__data__.has(e);
      }
      On.prototype.add = On.prototype.push = Dd, On.prototype.has = Pd;
      function Pt(e) {
        var t = this.__data__ = new Kt(e);
        this.size = t.size;
      }
      function Id() {
        this.__data__ = new Kt(), this.size = 0;
      }
      function Rd(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      function Bd(e) {
        return this.__data__.get(e);
      }
      function Vd(e) {
        return this.__data__.has(e);
      }
      function Fd(e, t) {
        var n = this.__data__;
        if (n instanceof Kt) {
          var l = n.__data__;
          if (!ur || l.length < g - 1)
            return l.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new jt(l);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      Pt.prototype.clear = Id, Pt.prototype.delete = Rd, Pt.prototype.get = Bd, Pt.prototype.has = Vd, Pt.prototype.set = Fd;
      function iu(e, t) {
        var n = ee(e), l = !n && Tn(e), a = !n && !l && mn(e), s = !n && !l && !a && jn(e), p = n || l || a || s, y = p ? Gi(e.length, jf) : [], x = y.length;
        for (var $ in e)
          (t || Ae.call(e, $)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
          ($ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && ($ == "offset" || $ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          s && ($ == "buffer" || $ == "byteLength" || $ == "byteOffset") || // Skip index properties.
          Jt($, x))) && y.push($);
        return y;
      }
      function lu(e) {
        var t = e.length;
        return t ? e[sl(0, t - 1)] : i;
      }
      function Md(e, t) {
        return ii(at(e), En(t, 0, e.length));
      }
      function Nd(e) {
        return ii(at(e));
      }
      function Qi(e, t, n) {
        (n !== i && !It(e[t], n) || n === i && !(t in e)) && Yt(e, t, n);
      }
      function dr(e, t, n) {
        var l = e[t];
        (!(Ae.call(e, t) && It(l, n)) || n === i && !(t in e)) && Yt(e, t, n);
      }
      function qr(e, t) {
        for (var n = e.length; n--; )
          if (It(e[n][0], t))
            return n;
        return -1;
      }
      function Ud(e, t, n, l) {
        return dn(e, function(a, s, p) {
          t(l, a, n(a), p);
        }), l;
      }
      function au(e, t) {
        return e && Nt(t, Ke(t), e);
      }
      function Hd(e, t) {
        return e && Nt(t, ot(t), e);
      }
      function Yt(e, t, n) {
        t == "__proto__" && Mr ? Mr(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      function el(e, t) {
        for (var n = -1, l = t.length, a = O(l), s = e == null; ++n < l; )
          a[n] = s ? i : Il(e, t[n]);
        return a;
      }
      function En(e, t, n) {
        return e === e && (n !== i && (e = e <= n ? e : n), t !== i && (e = e >= t ? e : t)), e;
      }
      function At(e, t, n, l, a, s) {
        var p, y = t & B, x = t & V, $ = t & z;
        if (n && (p = a ? n(e, l, a, s) : n(e)), p !== i)
          return p;
        if (!Pe(e))
          return e;
        var k = ee(e);
        if (k) {
          if (p = $c(e), !y)
            return at(e, p);
        } else {
          var D = Qe(e), R = D == je || D == an;
          if (mn(e))
            return $u(e, y);
          if (D == Gt || D == Q || R && !a) {
            if (p = x || R ? {} : Yu(e), !y)
              return x ? bc(e, Hd(p, e)) : yc(e, au(p, e));
          } else {
            if (!Le[D])
              return a ? e : {};
            p = kc(e, D, y);
          }
        }
        s || (s = new Pt());
        var H = s.get(e);
        if (H)
          return H;
        s.set(e, p), Eo(e) ? e.forEach(function(Z) {
          p.add(At(Z, t, n, Z, e, s));
        }) : Ao(e) && e.forEach(function(Z, se) {
          p.set(se, At(Z, t, n, se, e, s));
        });
        var X = $ ? x ? wl : bl : x ? ot : Ke, re = k ? i : X(e);
        return wt(re || e, function(Z, se) {
          re && (se = Z, Z = e[se]), dr(p, se, At(Z, t, n, se, e, s));
        }), p;
      }
      function Wd(e) {
        var t = Ke(e);
        return function(n) {
          return uu(n, e, t);
        };
      }
      function uu(e, t, n) {
        var l = n.length;
        if (e == null)
          return !l;
        for (e = _e(e); l--; ) {
          var a = n[l], s = t[a], p = e[a];
          if (p === i && !(a in e) || !s(p))
            return !1;
        }
        return !0;
      }
      function ou(e, t, n) {
        if (typeof e != "function")
          throw new xt(h);
        return yr(function() {
          e.apply(i, n);
        }, t);
      }
      function cr(e, t, n, l) {
        var a = -1, s = Lr, p = !0, y = e.length, x = [], $ = t.length;
        if (!y)
          return x;
        n && (t = De(t, ht(n))), l ? (s = Ni, p = !1) : t.length >= g && (s = lr, p = !1, t = new On(t));
        e:
          for (; ++a < y; ) {
            var k = e[a], D = n == null ? k : n(k);
            if (k = l || k !== 0 ? k : 0, p && D === D) {
              for (var R = $; R--; )
                if (t[R] === D)
                  continue e;
              x.push(k);
            } else
              s(t, D, l) || x.push(k);
          }
        return x;
      }
      var dn = Ru(Mt), su = Ru(nl, !0);
      function zd(e, t) {
        var n = !0;
        return dn(e, function(l, a, s) {
          return n = !!t(l, a, s), n;
        }), n;
      }
      function Gr(e, t, n) {
        for (var l = -1, a = e.length; ++l < a; ) {
          var s = e[l], p = t(s);
          if (p != null && (y === i ? p === p && !mt(p) : n(p, y)))
            var y = p, x = s;
        }
        return x;
      }
      function qd(e, t, n, l) {
        var a = e.length;
        for (n = ne(n), n < 0 && (n = -n > a ? 0 : a + n), l = l === i || l > a ? a : ne(l), l < 0 && (l += a), l = n > l ? 0 : Co(l); n < l; )
          e[n++] = t;
        return e;
      }
      function fu(e, t) {
        var n = [];
        return dn(e, function(l, a, s) {
          t(l, a, s) && n.push(l);
        }), n;
      }
      function Xe(e, t, n, l, a) {
        var s = -1, p = e.length;
        for (n || (n = Pc), a || (a = []); ++s < p; ) {
          var y = e[s];
          t > 0 && n(y) ? t > 1 ? Xe(y, t - 1, n, l, a) : on(a, y) : l || (a[a.length] = y);
        }
        return a;
      }
      var tl = Bu(), du = Bu(!0);
      function Mt(e, t) {
        return e && tl(e, t, Ke);
      }
      function nl(e, t) {
        return e && du(e, t, Ke);
      }
      function Kr(e, t) {
        return un(t, function(n) {
          return Qt(e[n]);
        });
      }
      function _n(e, t) {
        t = hn(t, e);
        for (var n = 0, l = t.length; e != null && n < l; )
          e = e[Ut(t[n++])];
        return n && n == l ? e : i;
      }
      function cu(e, t, n) {
        var l = t(e);
        return ee(e) ? l : on(l, n(e));
      }
      function nt(e) {
        return e == null ? e === i ? bs : oa : Sn && Sn in _e(e) ? Cc(e) : Nc(e);
      }
      function rl(e, t) {
        return e > t;
      }
      function Gd(e, t) {
        return e != null && Ae.call(e, t);
      }
      function Kd(e, t) {
        return e != null && t in _e(e);
      }
      function jd(e, t, n) {
        return e >= Je(t, n) && e < ze(t, n);
      }
      function il(e, t, n) {
        for (var l = n ? Ni : Lr, a = e[0].length, s = e.length, p = s, y = O(s), x = 1 / 0, $ = []; p--; ) {
          var k = e[p];
          p && t && (k = De(k, ht(t))), x = Je(k.length, x), y[p] = !n && (t || a >= 120 && k.length >= 120) ? new On(p && k) : i;
        }
        k = e[0];
        var D = -1, R = y[0];
        e:
          for (; ++D < a && $.length < x; ) {
            var H = k[D], X = t ? t(H) : H;
            if (H = n || H !== 0 ? H : 0, !(R ? lr(R, X) : l($, X, n))) {
              for (p = s; --p; ) {
                var re = y[p];
                if (!(re ? lr(re, X) : l(e[p], X, n)))
                  continue e;
              }
              R && R.push(X), $.push(H);
            }
          }
        return $;
      }
      function Yd(e, t, n, l) {
        return Mt(e, function(a, s, p) {
          t(l, n(a), s, p);
        }), l;
      }
      function hr(e, t, n) {
        t = hn(t, e), e = Qu(e, t);
        var l = e == null ? e : e[Ut(Et(t))];
        return l == null ? i : ct(l, e, n);
      }
      function hu(e) {
        return Be(e) && nt(e) == Q;
      }
      function Xd(e) {
        return Be(e) && nt(e) == ir;
      }
      function Zd(e) {
        return Be(e) && nt(e) == Ge;
      }
      function pr(e, t, n, l, a) {
        return e === t ? !0 : e == null || t == null || !Be(e) && !Be(t) ? e !== e && t !== t : Jd(e, t, n, l, pr, a);
      }
      function Jd(e, t, n, l, a, s) {
        var p = ee(e), y = ee(t), x = p ? ke : Qe(e), $ = y ? ke : Qe(t);
        x = x == Q ? Gt : x, $ = $ == Q ? Gt : $;
        var k = x == Gt, D = $ == Gt, R = x == $;
        if (R && mn(e)) {
          if (!mn(t))
            return !1;
          p = !0, k = !1;
        }
        if (R && !k)
          return s || (s = new Pt()), p || jn(e) ? Gu(e, t, n, l, a, s) : Ec(e, t, x, n, l, a, s);
        if (!(n & q)) {
          var H = k && Ae.call(e, "__wrapped__"), X = D && Ae.call(t, "__wrapped__");
          if (H || X) {
            var re = H ? e.value() : e, Z = X ? t.value() : t;
            return s || (s = new Pt()), a(re, Z, n, l, s);
          }
        }
        return R ? (s || (s = new Pt()), _c(e, t, n, l, a, s)) : !1;
      }
      function Qd(e) {
        return Be(e) && Qe(e) == Re;
      }
      function ll(e, t, n, l) {
        var a = n.length, s = a, p = !l;
        if (e == null)
          return !s;
        for (e = _e(e); a--; ) {
          var y = n[a];
          if (p && y[2] ? y[1] !== e[y[0]] : !(y[0] in e))
            return !1;
        }
        for (; ++a < s; ) {
          y = n[a];
          var x = y[0], $ = e[x], k = y[1];
          if (p && y[2]) {
            if ($ === i && !(x in e))
              return !1;
          } else {
            var D = new Pt();
            if (l)
              var R = l($, k, x, e, t, D);
            if (!(R === i ? pr(k, $, q | Ie, l, D) : R))
              return !1;
          }
        }
        return !0;
      }
      function pu(e) {
        if (!Pe(e) || Rc(e))
          return !1;
        var t = Qt(e) ? Qf : Hs;
        return t.test(Ln(e));
      }
      function ec(e) {
        return Be(e) && nt(e) == tr;
      }
      function tc(e) {
        return Be(e) && Qe(e) == kt;
      }
      function nc(e) {
        return Be(e) && fi(e.length) && !!Te[nt(e)];
      }
      function mu(e) {
        return typeof e == "function" ? e : e == null ? st : typeof e == "object" ? ee(e) ? yu(e[0], e[1]) : vu(e) : Fo(e);
      }
      function al(e) {
        if (!vr(e))
          return ld(e);
        var t = [];
        for (var n in _e(e))
          Ae.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      function rc(e) {
        if (!Pe(e))
          return Mc(e);
        var t = vr(e), n = [];
        for (var l in e)
          l == "constructor" && (t || !Ae.call(e, l)) || n.push(l);
        return n;
      }
      function ul(e, t) {
        return e < t;
      }
      function gu(e, t) {
        var n = -1, l = ut(e) ? O(e.length) : [];
        return dn(e, function(a, s, p) {
          l[++n] = t(a, s, p);
        }), l;
      }
      function vu(e) {
        var t = Sl(e);
        return t.length == 1 && t[0][2] ? Zu(t[0][0], t[0][1]) : function(n) {
          return n === e || ll(n, e, t);
        };
      }
      function yu(e, t) {
        return Ol(e) && Xu(t) ? Zu(Ut(e), t) : function(n) {
          var l = Il(n, e);
          return l === i && l === t ? Rl(n, e) : pr(t, l, q | Ie);
        };
      }
      function jr(e, t, n, l, a) {
        e !== t && tl(t, function(s, p) {
          if (a || (a = new Pt()), Pe(s))
            ic(e, t, p, n, jr, l, a);
          else {
            var y = l ? l(_l(e, p), s, p + "", e, t, a) : i;
            y === i && (y = s), Qi(e, p, y);
          }
        }, ot);
      }
      function ic(e, t, n, l, a, s, p) {
        var y = _l(e, n), x = _l(t, n), $ = p.get(x);
        if ($) {
          Qi(e, n, $);
          return;
        }
        var k = s ? s(y, x, n + "", e, t, p) : i, D = k === i;
        if (D) {
          var R = ee(x), H = !R && mn(x), X = !R && !H && jn(x);
          k = x, R || H || X ? ee(y) ? k = y : Me(y) ? k = at(y) : H ? (D = !1, k = $u(x, !0)) : X ? (D = !1, k = ku(x, !0)) : k = [] : br(x) || Tn(x) ? (k = y, Tn(y) ? k = Lo(y) : (!Pe(y) || Qt(y)) && (k = Yu(x))) : D = !1;
        }
        D && (p.set(x, k), a(k, x, l, s, p), p.delete(x)), Qi(e, n, k);
      }
      function bu(e, t) {
        var n = e.length;
        if (n)
          return t += t < 0 ? n : 0, Jt(t, n) ? e[t] : i;
      }
      function wu(e, t, n) {
        t.length ? t = De(t, function(s) {
          return ee(s) ? function(p) {
            return _n(p, s.length === 1 ? s[0] : s);
          } : s;
        }) : t = [st];
        var l = -1;
        t = De(t, ht(j()));
        var a = gu(e, function(s, p, y) {
          var x = De(t, function($) {
            return $(s);
          });
          return { criteria: x, index: ++l, value: s };
        });
        return kf(a, function(s, p) {
          return vc(s, p, n);
        });
      }
      function lc(e, t) {
        return xu(e, t, function(n, l) {
          return Rl(e, l);
        });
      }
      function xu(e, t, n) {
        for (var l = -1, a = t.length, s = {}; ++l < a; ) {
          var p = t[l], y = _n(e, p);
          n(y, p) && mr(s, hn(p, e), y);
        }
        return s;
      }
      function ac(e) {
        return function(t) {
          return _n(t, e);
        };
      }
      function ol(e, t, n, l) {
        var a = l ? $f : Vn, s = -1, p = t.length, y = e;
        for (e === t && (t = at(t)), n && (y = De(e, ht(n))); ++s < p; )
          for (var x = 0, $ = t[s], k = n ? n($) : $; (x = a(y, k, x, l)) > -1; )
            y !== e && Fr.call(y, x, 1), Fr.call(e, x, 1);
        return e;
      }
      function Su(e, t) {
        for (var n = e ? t.length : 0, l = n - 1; n--; ) {
          var a = t[n];
          if (n == l || a !== s) {
            var s = a;
            Jt(a) ? Fr.call(e, a, 1) : cl(e, a);
          }
        }
        return e;
      }
      function sl(e, t) {
        return e + Ur(nu() * (t - e + 1));
      }
      function uc(e, t, n, l) {
        for (var a = -1, s = ze(Nr((t - e) / (n || 1)), 0), p = O(s); s--; )
          p[l ? s : ++a] = e, e += n;
        return p;
      }
      function fl(e, t) {
        var n = "";
        if (!e || t < 1 || t > m)
          return n;
        do
          t % 2 && (n += e), t = Ur(t / 2), t && (e += e);
        while (t);
        return n;
      }
      function oe(e, t) {
        return Cl(Ju(e, t, st), e + "");
      }
      function oc(e) {
        return lu(Yn(e));
      }
      function sc(e, t) {
        var n = Yn(e);
        return ii(n, En(t, 0, n.length));
      }
      function mr(e, t, n, l) {
        if (!Pe(e))
          return e;
        t = hn(t, e);
        for (var a = -1, s = t.length, p = s - 1, y = e; y != null && ++a < s; ) {
          var x = Ut(t[a]), $ = n;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return e;
          if (a != p) {
            var k = y[x];
            $ = l ? l(k, x, y) : i, $ === i && ($ = Pe(k) ? k : Jt(t[a + 1]) ? [] : {});
          }
          dr(y, x, $), y = y[x];
        }
        return e;
      }
      var Au = Hr ? function(e, t) {
        return Hr.set(e, t), e;
      } : st, fc = Mr ? function(e, t) {
        return Mr(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Vl(t),
          writable: !0
        });
      } : st;
      function dc(e) {
        return ii(Yn(e));
      }
      function Ot(e, t, n) {
        var l = -1, a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var s = O(a); ++l < a; )
          s[l] = e[l + t];
        return s;
      }
      function cc(e, t) {
        var n;
        return dn(e, function(l, a, s) {
          return n = t(l, a, s), !n;
        }), !!n;
      }
      function Yr(e, t, n) {
        var l = 0, a = e == null ? l : e.length;
        if (typeof t == "number" && t === t && a <= me) {
          for (; l < a; ) {
            var s = l + a >>> 1, p = e[s];
            p !== null && !mt(p) && (n ? p <= t : p < t) ? l = s + 1 : a = s;
          }
          return a;
        }
        return dl(e, t, st, n);
      }
      function dl(e, t, n, l) {
        var a = 0, s = e == null ? 0 : e.length;
        if (s === 0)
          return 0;
        t = n(t);
        for (var p = t !== t, y = t === null, x = mt(t), $ = t === i; a < s; ) {
          var k = Ur((a + s) / 2), D = n(e[k]), R = D !== i, H = D === null, X = D === D, re = mt(D);
          if (p)
            var Z = l || X;
          else
            $ ? Z = X && (l || R) : y ? Z = X && R && (l || !H) : x ? Z = X && R && !H && (l || !re) : H || re ? Z = !1 : Z = l ? D <= t : D < t;
          Z ? a = k + 1 : s = k;
        }
        return Je(s, ae);
      }
      function Ou(e, t) {
        for (var n = -1, l = e.length, a = 0, s = []; ++n < l; ) {
          var p = e[n], y = t ? t(p) : p;
          if (!n || !It(y, x)) {
            var x = y;
            s[a++] = p === 0 ? 0 : p;
          }
        }
        return s;
      }
      function Eu(e) {
        return typeof e == "number" ? e : mt(e) ? C : +e;
      }
      function pt(e) {
        if (typeof e == "string")
          return e;
        if (ee(e))
          return De(e, pt) + "";
        if (mt(e))
          return ru ? ru.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -d ? "-0" : t;
      }
      function cn(e, t, n) {
        var l = -1, a = Lr, s = e.length, p = !0, y = [], x = y;
        if (n)
          p = !1, a = Ni;
        else if (s >= g) {
          var $ = t ? null : Ac(e);
          if ($)
            return $r($);
          p = !1, a = lr, x = new On();
        } else
          x = t ? [] : y;
        e:
          for (; ++l < s; ) {
            var k = e[l], D = t ? t(k) : k;
            if (k = n || k !== 0 ? k : 0, p && D === D) {
              for (var R = x.length; R--; )
                if (x[R] === D)
                  continue e;
              t && x.push(D), y.push(k);
            } else
              a(x, D, n) || (x !== y && x.push(D), y.push(k));
          }
        return y;
      }
      function cl(e, t) {
        return t = hn(t, e), e = Qu(e, t), e == null || delete e[Ut(Et(t))];
      }
      function _u(e, t, n, l) {
        return mr(e, t, n(_n(e, t)), l);
      }
      function Xr(e, t, n, l) {
        for (var a = e.length, s = l ? a : -1; (l ? s-- : ++s < a) && t(e[s], s, e); )
          ;
        return n ? Ot(e, l ? 0 : s, l ? s + 1 : a) : Ot(e, l ? s + 1 : 0, l ? a : s);
      }
      function Cu(e, t) {
        var n = e;
        return n instanceof ce && (n = n.value()), Ui(t, function(l, a) {
          return a.func.apply(a.thisArg, on([l], a.args));
        }, n);
      }
      function hl(e, t, n) {
        var l = e.length;
        if (l < 2)
          return l ? cn(e[0]) : [];
        for (var a = -1, s = O(l); ++a < l; )
          for (var p = e[a], y = -1; ++y < l; )
            y != a && (s[a] = cr(s[a] || p, e[y], t, n));
        return cn(Xe(s, 1), t, n);
      }
      function Lu(e, t, n) {
        for (var l = -1, a = e.length, s = t.length, p = {}; ++l < a; ) {
          var y = l < s ? t[l] : i;
          n(p, e[l], y);
        }
        return p;
      }
      function pl(e) {
        return Me(e) ? e : [];
      }
      function ml(e) {
        return typeof e == "function" ? e : st;
      }
      function hn(e, t) {
        return ee(e) ? e : Ol(e, t) ? [e] : ro(Se(e));
      }
      var hc = oe;
      function pn(e, t, n) {
        var l = e.length;
        return n = n === i ? l : n, !t && n >= l ? e : Ot(e, t, n);
      }
      var Tu = ed || function(e) {
        return Ye.clearTimeout(e);
      };
      function $u(e, t) {
        if (t)
          return e.slice();
        var n = e.length, l = Za ? Za(n) : new e.constructor(n);
        return e.copy(l), l;
      }
      function gl(e) {
        var t = new e.constructor(e.byteLength);
        return new Br(t).set(new Br(e)), t;
      }
      function pc(e, t) {
        var n = t ? gl(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function mc(e) {
        var t = new e.constructor(e.source, ha.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function gc(e) {
        return fr ? _e(fr.call(e)) : {};
      }
      function ku(e, t) {
        var n = t ? gl(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function Du(e, t) {
        if (e !== t) {
          var n = e !== i, l = e === null, a = e === e, s = mt(e), p = t !== i, y = t === null, x = t === t, $ = mt(t);
          if (!y && !$ && !s && e > t || s && p && x && !y && !$ || l && p && x || !n && x || !a)
            return 1;
          if (!l && !s && !$ && e < t || $ && n && a && !l && !s || y && n && a || !p && a || !x)
            return -1;
        }
        return 0;
      }
      function vc(e, t, n) {
        for (var l = -1, a = e.criteria, s = t.criteria, p = a.length, y = n.length; ++l < p; ) {
          var x = Du(a[l], s[l]);
          if (x) {
            if (l >= y)
              return x;
            var $ = n[l];
            return x * ($ == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Pu(e, t, n, l) {
        for (var a = -1, s = e.length, p = n.length, y = -1, x = t.length, $ = ze(s - p, 0), k = O(x + $), D = !l; ++y < x; )
          k[y] = t[y];
        for (; ++a < p; )
          (D || a < s) && (k[n[a]] = e[a]);
        for (; $--; )
          k[y++] = e[a++];
        return k;
      }
      function Iu(e, t, n, l) {
        for (var a = -1, s = e.length, p = -1, y = n.length, x = -1, $ = t.length, k = ze(s - y, 0), D = O(k + $), R = !l; ++a < k; )
          D[a] = e[a];
        for (var H = a; ++x < $; )
          D[H + x] = t[x];
        for (; ++p < y; )
          (R || a < s) && (D[H + n[p]] = e[a++]);
        return D;
      }
      function at(e, t) {
        var n = -1, l = e.length;
        for (t || (t = O(l)); ++n < l; )
          t[n] = e[n];
        return t;
      }
      function Nt(e, t, n, l) {
        var a = !n;
        n || (n = {});
        for (var s = -1, p = t.length; ++s < p; ) {
          var y = t[s], x = l ? l(n[y], e[y], y, n, e) : i;
          x === i && (x = e[y]), a ? Yt(n, y, x) : dr(n, y, x);
        }
        return n;
      }
      function yc(e, t) {
        return Nt(e, Al(e), t);
      }
      function bc(e, t) {
        return Nt(e, Ku(e), t);
      }
      function Zr(e, t) {
        return function(n, l) {
          var a = ee(n) ? Of : Ud, s = t ? t() : {};
          return a(n, e, j(l, 2), s);
        };
      }
      function qn(e) {
        return oe(function(t, n) {
          var l = -1, a = n.length, s = a > 1 ? n[a - 1] : i, p = a > 2 ? n[2] : i;
          for (s = e.length > 3 && typeof s == "function" ? (a--, s) : i, p && rt(n[0], n[1], p) && (s = a < 3 ? i : s, a = 1), t = _e(t); ++l < a; ) {
            var y = n[l];
            y && e(t, y, l, s);
          }
          return t;
        });
      }
      function Ru(e, t) {
        return function(n, l) {
          if (n == null)
            return n;
          if (!ut(n))
            return e(n, l);
          for (var a = n.length, s = t ? a : -1, p = _e(n); (t ? s-- : ++s < a) && l(p[s], s, p) !== !1; )
            ;
          return n;
        };
      }
      function Bu(e) {
        return function(t, n, l) {
          for (var a = -1, s = _e(t), p = l(t), y = p.length; y--; ) {
            var x = p[e ? y : ++a];
            if (n(s[x], x, s) === !1)
              break;
          }
          return t;
        };
      }
      function wc(e, t, n) {
        var l = t & ye, a = gr(e);
        function s() {
          var p = this && this !== Ye && this instanceof s ? a : e;
          return p.apply(l ? n : this, arguments);
        }
        return s;
      }
      function Vu(e) {
        return function(t) {
          t = Se(t);
          var n = Fn(t) ? Dt(t) : i, l = n ? n[0] : t.charAt(0), a = n ? pn(n, 1).join("") : t.slice(1);
          return l[e]() + a;
        };
      }
      function Gn(e) {
        return function(t) {
          return Ui(Bo(Ro(t).replace(ff, "")), e, "");
        };
      }
      function gr(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = zn(e.prototype), l = e.apply(n, t);
          return Pe(l) ? l : n;
        };
      }
      function xc(e, t, n) {
        var l = gr(e);
        function a() {
          for (var s = arguments.length, p = O(s), y = s, x = Kn(a); y--; )
            p[y] = arguments[y];
          var $ = s < 3 && p[0] !== x && p[s - 1] !== x ? [] : sn(p, x);
          if (s -= $.length, s < n)
            return Hu(
              e,
              t,
              Jr,
              a.placeholder,
              i,
              p,
              $,
              i,
              i,
              n - s
            );
          var k = this && this !== Ye && this instanceof a ? l : e;
          return ct(k, this, p);
        }
        return a;
      }
      function Fu(e) {
        return function(t, n, l) {
          var a = _e(t);
          if (!ut(t)) {
            var s = j(n, 3);
            t = Ke(t), n = function(y) {
              return s(a[y], y, a);
            };
          }
          var p = e(t, n, l);
          return p > -1 ? a[s ? t[p] : p] : i;
        };
      }
      function Mu(e) {
        return Zt(function(t) {
          var n = t.length, l = n, a = St.prototype.thru;
          for (e && t.reverse(); l--; ) {
            var s = t[l];
            if (typeof s != "function")
              throw new xt(h);
            if (a && !p && ni(s) == "wrapper")
              var p = new St([], !0);
          }
          for (l = p ? l : n; ++l < n; ) {
            s = t[l];
            var y = ni(s), x = y == "wrapper" ? xl(s) : i;
            x && El(x[0]) && x[1] == (N | fe | xe | G) && !x[4].length && x[9] == 1 ? p = p[ni(x[0])].apply(p, x[3]) : p = s.length == 1 && El(s) ? p[y]() : p.thru(s);
          }
          return function() {
            var $ = arguments, k = $[0];
            if (p && $.length == 1 && ee(k))
              return p.plant(k).value();
            for (var D = 0, R = n ? t[D].apply(this, $) : k; ++D < n; )
              R = t[D].call(this, R);
            return R;
          };
        });
      }
      function Jr(e, t, n, l, a, s, p, y, x, $) {
        var k = t & N, D = t & ye, R = t & Ue, H = t & (fe | U), X = t & le, re = R ? i : gr(e);
        function Z() {
          for (var se = arguments.length, pe = O(se), gt = se; gt--; )
            pe[gt] = arguments[gt];
          if (H)
            var it = Kn(Z), vt = Pf(pe, it);
          if (l && (pe = Pu(pe, l, a, H)), s && (pe = Iu(pe, s, p, H)), se -= vt, H && se < $) {
            var Ne = sn(pe, it);
            return Hu(
              e,
              t,
              Jr,
              Z.placeholder,
              n,
              pe,
              Ne,
              y,
              x,
              $ - se
            );
          }
          var Rt = D ? n : this, tn = R ? Rt[e] : e;
          return se = pe.length, y ? pe = Uc(pe, y) : X && se > 1 && pe.reverse(), k && x < se && (pe.length = x), this && this !== Ye && this instanceof Z && (tn = re || gr(tn)), tn.apply(Rt, pe);
        }
        return Z;
      }
      function Nu(e, t) {
        return function(n, l) {
          return Yd(n, e, t(l), {});
        };
      }
      function Qr(e, t) {
        return function(n, l) {
          var a;
          if (n === i && l === i)
            return t;
          if (n !== i && (a = n), l !== i) {
            if (a === i)
              return l;
            typeof n == "string" || typeof l == "string" ? (n = pt(n), l = pt(l)) : (n = Eu(n), l = Eu(l)), a = e(n, l);
          }
          return a;
        };
      }
      function vl(e) {
        return Zt(function(t) {
          return t = De(t, ht(j())), oe(function(n) {
            var l = this;
            return e(t, function(a) {
              return ct(a, l, n);
            });
          });
        });
      }
      function ei(e, t) {
        t = t === i ? " " : pt(t);
        var n = t.length;
        if (n < 2)
          return n ? fl(t, e) : t;
        var l = fl(t, Nr(e / Mn(t)));
        return Fn(t) ? pn(Dt(l), 0, e).join("") : l.slice(0, e);
      }
      function Sc(e, t, n, l) {
        var a = t & ye, s = gr(e);
        function p() {
          for (var y = -1, x = arguments.length, $ = -1, k = l.length, D = O(k + x), R = this && this !== Ye && this instanceof p ? s : e; ++$ < k; )
            D[$] = l[$];
          for (; x--; )
            D[$++] = arguments[++y];
          return ct(R, a ? n : this, D);
        }
        return p;
      }
      function Uu(e) {
        return function(t, n, l) {
          return l && typeof l != "number" && rt(t, n, l) && (n = l = i), t = en(t), n === i ? (n = t, t = 0) : n = en(n), l = l === i ? t < n ? 1 : -1 : en(l), uc(t, n, l, e);
        };
      }
      function ti(e) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = _t(t), n = _t(n)), e(t, n);
        };
      }
      function Hu(e, t, n, l, a, s, p, y, x, $) {
        var k = t & fe, D = k ? p : i, R = k ? i : p, H = k ? s : i, X = k ? i : s;
        t |= k ? xe : F, t &= ~(k ? F : xe), t & Ee || (t &= ~(ye | Ue));
        var re = [
          e,
          t,
          a,
          H,
          D,
          X,
          R,
          y,
          x,
          $
        ], Z = n.apply(i, re);
        return El(e) && eo(Z, re), Z.placeholder = l, to(Z, e, t);
      }
      function yl(e) {
        var t = We[e];
        return function(n, l) {
          if (n = _t(n), l = l == null ? 0 : Je(ne(l), 292), l && tu(n)) {
            var a = (Se(n) + "e").split("e"), s = t(a[0] + "e" + (+a[1] + l));
            return a = (Se(s) + "e").split("e"), +(a[0] + "e" + (+a[1] - l));
          }
          return t(n);
        };
      }
      var Ac = Hn && 1 / $r(new Hn([, -0]))[1] == d ? function(e) {
        return new Hn(e);
      } : Nl;
      function Wu(e) {
        return function(t) {
          var n = Qe(t);
          return n == Re ? ji(t) : n == kt ? Nf(t) : Df(t, e(t));
        };
      }
      function Xt(e, t, n, l, a, s, p, y) {
        var x = t & Ue;
        if (!x && typeof e != "function")
          throw new xt(h);
        var $ = l ? l.length : 0;
        if ($ || (t &= ~(xe | F), l = a = i), p = p === i ? p : ze(ne(p), 0), y = y === i ? y : ne(y), $ -= a ? a.length : 0, t & F) {
          var k = l, D = a;
          l = a = i;
        }
        var R = x ? i : xl(e), H = [
          e,
          t,
          n,
          l,
          a,
          k,
          D,
          s,
          p,
          y
        ];
        if (R && Fc(H, R), e = H[0], t = H[1], n = H[2], l = H[3], a = H[4], y = H[9] = H[9] === i ? x ? 0 : e.length : ze(H[9] - $, 0), !y && t & (fe | U) && (t &= ~(fe | U)), !t || t == ye)
          var X = wc(e, t, n);
        else
          t == fe || t == U ? X = xc(e, t, y) : (t == xe || t == (ye | xe)) && !a.length ? X = Sc(e, t, n, l) : X = Jr.apply(i, H);
        var re = R ? Au : eo;
        return to(re(X, H), e, t);
      }
      function zu(e, t, n, l) {
        return e === i || It(e, Un[n]) && !Ae.call(l, n) ? t : e;
      }
      function qu(e, t, n, l, a, s) {
        return Pe(e) && Pe(t) && (s.set(t, e), jr(e, t, i, qu, s), s.delete(t)), e;
      }
      function Oc(e) {
        return br(e) ? i : e;
      }
      function Gu(e, t, n, l, a, s) {
        var p = n & q, y = e.length, x = t.length;
        if (y != x && !(p && x > y))
          return !1;
        var $ = s.get(e), k = s.get(t);
        if ($ && k)
          return $ == t && k == e;
        var D = -1, R = !0, H = n & Ie ? new On() : i;
        for (s.set(e, t), s.set(t, e); ++D < y; ) {
          var X = e[D], re = t[D];
          if (l)
            var Z = p ? l(re, X, D, t, e, s) : l(X, re, D, e, t, s);
          if (Z !== i) {
            if (Z)
              continue;
            R = !1;
            break;
          }
          if (H) {
            if (!Hi(t, function(se, pe) {
              if (!lr(H, pe) && (X === se || a(X, se, n, l, s)))
                return H.push(pe);
            })) {
              R = !1;
              break;
            }
          } else if (!(X === re || a(X, re, n, l, s))) {
            R = !1;
            break;
          }
        }
        return s.delete(e), s.delete(t), R;
      }
      function Ec(e, t, n, l, a, s, p) {
        switch (n) {
          case Rn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case ir:
            return !(e.byteLength != t.byteLength || !s(new Br(e), new Br(t)));
          case he:
          case Ge:
          case tt:
            return It(+e, +t);
          case He:
            return e.name == t.name && e.message == t.message;
          case tr:
          case nr:
            return e == t + "";
          case Re:
            var y = ji;
          case kt:
            var x = l & q;
            if (y || (y = $r), e.size != t.size && !x)
              return !1;
            var $ = p.get(e);
            if ($)
              return $ == t;
            l |= Ie, p.set(e, t);
            var k = Gu(y(e), y(t), l, a, s, p);
            return p.delete(e), k;
          case Or:
            if (fr)
              return fr.call(e) == fr.call(t);
        }
        return !1;
      }
      function _c(e, t, n, l, a, s) {
        var p = n & q, y = bl(e), x = y.length, $ = bl(t), k = $.length;
        if (x != k && !p)
          return !1;
        for (var D = x; D--; ) {
          var R = y[D];
          if (!(p ? R in t : Ae.call(t, R)))
            return !1;
        }
        var H = s.get(e), X = s.get(t);
        if (H && X)
          return H == t && X == e;
        var re = !0;
        s.set(e, t), s.set(t, e);
        for (var Z = p; ++D < x; ) {
          R = y[D];
          var se = e[R], pe = t[R];
          if (l)
            var gt = p ? l(pe, se, R, t, e, s) : l(se, pe, R, e, t, s);
          if (!(gt === i ? se === pe || a(se, pe, n, l, s) : gt)) {
            re = !1;
            break;
          }
          Z || (Z = R == "constructor");
        }
        if (re && !Z) {
          var it = e.constructor, vt = t.constructor;
          it != vt && "constructor" in e && "constructor" in t && !(typeof it == "function" && it instanceof it && typeof vt == "function" && vt instanceof vt) && (re = !1);
        }
        return s.delete(e), s.delete(t), re;
      }
      function Zt(e) {
        return Cl(Ju(e, i, uo), e + "");
      }
      function bl(e) {
        return cu(e, Ke, Al);
      }
      function wl(e) {
        return cu(e, ot, Ku);
      }
      var xl = Hr ? function(e) {
        return Hr.get(e);
      } : Nl;
      function ni(e) {
        for (var t = e.name + "", n = Wn[t], l = Ae.call(Wn, t) ? n.length : 0; l--; ) {
          var a = n[l], s = a.func;
          if (s == null || s == e)
            return a.name;
        }
        return t;
      }
      function Kn(e) {
        var t = Ae.call(o, "placeholder") ? o : e;
        return t.placeholder;
      }
      function j() {
        var e = o.iteratee || Fl;
        return e = e === Fl ? mu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ri(e, t) {
        var n = e.__data__;
        return Ic(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      function Sl(e) {
        for (var t = Ke(e), n = t.length; n--; ) {
          var l = t[n], a = e[l];
          t[n] = [l, a, Xu(a)];
        }
        return t;
      }
      function Cn(e, t) {
        var n = Vf(e, t);
        return pu(n) ? n : i;
      }
      function Cc(e) {
        var t = Ae.call(e, Sn), n = e[Sn];
        try {
          e[Sn] = i;
          var l = !0;
        } catch {
        }
        var a = Ir.call(e);
        return l && (t ? e[Sn] = n : delete e[Sn]), a;
      }
      var Al = Xi ? function(e) {
        return e == null ? [] : (e = _e(e), un(Xi(e), function(t) {
          return Qa.call(e, t);
        }));
      } : Ul, Ku = Xi ? function(e) {
        for (var t = []; e; )
          on(t, Al(e)), e = Vr(e);
        return t;
      } : Ul, Qe = nt;
      (Zi && Qe(new Zi(new ArrayBuffer(1))) != Rn || ur && Qe(new ur()) != Re || Ji && Qe(Ji.resolve()) != sa || Hn && Qe(new Hn()) != kt || or && Qe(new or()) != rr) && (Qe = function(e) {
        var t = nt(e), n = t == Gt ? e.constructor : i, l = n ? Ln(n) : "";
        if (l)
          switch (l) {
            case sd:
              return Rn;
            case fd:
              return Re;
            case dd:
              return sa;
            case cd:
              return kt;
            case hd:
              return rr;
          }
        return t;
      });
      function Lc(e, t, n) {
        for (var l = -1, a = n.length; ++l < a; ) {
          var s = n[l], p = s.size;
          switch (s.type) {
            case "drop":
              e += p;
              break;
            case "dropRight":
              t -= p;
              break;
            case "take":
              t = Je(t, e + p);
              break;
            case "takeRight":
              e = ze(e, t - p);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Tc(e) {
        var t = e.match(Is);
        return t ? t[1].split(Rs) : [];
      }
      function ju(e, t, n) {
        t = hn(t, e);
        for (var l = -1, a = t.length, s = !1; ++l < a; ) {
          var p = Ut(t[l]);
          if (!(s = e != null && n(e, p)))
            break;
          e = e[p];
        }
        return s || ++l != a ? s : (a = e == null ? 0 : e.length, !!a && fi(a) && Jt(p, a) && (ee(e) || Tn(e)));
      }
      function $c(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && Ae.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function Yu(e) {
        return typeof e.constructor == "function" && !vr(e) ? zn(Vr(e)) : {};
      }
      function kc(e, t, n) {
        var l = e.constructor;
        switch (t) {
          case ir:
            return gl(e);
          case he:
          case Ge:
            return new l(+e);
          case Rn:
            return pc(e, n);
          case Si:
          case Ai:
          case Oi:
          case Ei:
          case _i:
          case Ci:
          case Li:
          case Ti:
          case $i:
            return ku(e, n);
          case Re:
            return new l();
          case tt:
          case nr:
            return new l(e);
          case tr:
            return mc(e);
          case kt:
            return new l();
          case Or:
            return gc(e);
        }
      }
      function Dc(e, t) {
        var n = t.length;
        if (!n)
          return e;
        var l = n - 1;
        return t[l] = (n > 1 ? "& " : "") + t[l], t = t.join(n > 2 ? ", " : " "), e.replace(Ps, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Pc(e) {
        return ee(e) || Tn(e) || !!(eu && e && e[eu]);
      }
      function Jt(e, t) {
        var n = typeof e;
        return t = t ?? m, !!t && (n == "number" || n != "symbol" && zs.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function rt(e, t, n) {
        if (!Pe(n))
          return !1;
        var l = typeof t;
        return (l == "number" ? ut(n) && Jt(t, n.length) : l == "string" && t in n) ? It(n[t], e) : !1;
      }
      function Ol(e, t) {
        if (ee(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || mt(e) ? !0 : Ts.test(e) || !Ls.test(e) || t != null && e in _e(t);
      }
      function Ic(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function El(e) {
        var t = ni(e), n = o[t];
        if (typeof n != "function" || !(t in ce.prototype))
          return !1;
        if (e === n)
          return !0;
        var l = xl(n);
        return !!l && e === l[0];
      }
      function Rc(e) {
        return !!Xa && Xa in e;
      }
      var Bc = Dr ? Qt : Hl;
      function vr(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || Un;
        return e === n;
      }
      function Xu(e) {
        return e === e && !Pe(e);
      }
      function Zu(e, t) {
        return function(n) {
          return n == null ? !1 : n[e] === t && (t !== i || e in _e(n));
        };
      }
      function Vc(e) {
        var t = oi(e, function(l) {
          return n.size === _ && n.clear(), l;
        }), n = t.cache;
        return t;
      }
      function Fc(e, t) {
        var n = e[1], l = t[1], a = n | l, s = a < (ye | Ue | N), p = l == N && n == fe || l == N && n == G && e[7].length <= t[8] || l == (N | G) && t[7].length <= t[8] && n == fe;
        if (!(s || p))
          return e;
        l & ye && (e[2] = t[2], a |= n & ye ? 0 : Ee);
        var y = t[3];
        if (y) {
          var x = e[3];
          e[3] = x ? Pu(x, y, t[4]) : y, e[4] = x ? sn(e[3], T) : t[4];
        }
        return y = t[5], y && (x = e[5], e[5] = x ? Iu(x, y, t[6]) : y, e[6] = x ? sn(e[5], T) : t[6]), y = t[7], y && (e[7] = y), l & N && (e[8] = e[8] == null ? t[8] : Je(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = a, e;
      }
      function Mc(e) {
        var t = [];
        if (e != null)
          for (var n in _e(e))
            t.push(n);
        return t;
      }
      function Nc(e) {
        return Ir.call(e);
      }
      function Ju(e, t, n) {
        return t = ze(t === i ? e.length - 1 : t, 0), function() {
          for (var l = arguments, a = -1, s = ze(l.length - t, 0), p = O(s); ++a < s; )
            p[a] = l[t + a];
          a = -1;
          for (var y = O(t + 1); ++a < t; )
            y[a] = l[a];
          return y[t] = n(p), ct(e, this, y);
        };
      }
      function Qu(e, t) {
        return t.length < 2 ? e : _n(e, Ot(t, 0, -1));
      }
      function Uc(e, t) {
        for (var n = e.length, l = Je(t.length, n), a = at(e); l--; ) {
          var s = t[l];
          e[l] = Jt(s, n) ? a[s] : i;
        }
        return e;
      }
      function _l(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var eo = no(Au), yr = nd || function(e, t) {
        return Ye.setTimeout(e, t);
      }, Cl = no(fc);
      function to(e, t, n) {
        var l = t + "";
        return Cl(e, Dc(l, Hc(Tc(l), n)));
      }
      function no(e) {
        var t = 0, n = 0;
        return function() {
          var l = ad(), a = Ft - (l - n);
          if (n = l, a > 0) {
            if (++t >= Vt)
              return arguments[0];
          } else
            t = 0;
          return e.apply(i, arguments);
        };
      }
      function ii(e, t) {
        var n = -1, l = e.length, a = l - 1;
        for (t = t === i ? l : t; ++n < t; ) {
          var s = sl(n, a), p = e[s];
          e[s] = e[n], e[n] = p;
        }
        return e.length = t, e;
      }
      var ro = Vc(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace($s, function(n, l, a, s) {
          t.push(a ? s.replace(Fs, "$1") : l || n);
        }), t;
      });
      function Ut(e) {
        if (typeof e == "string" || mt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -d ? "-0" : t;
      }
      function Ln(e) {
        if (e != null) {
          try {
            return Pr.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Hc(e, t) {
        return wt(be, function(n) {
          var l = "_." + n[0];
          t & n[1] && !Lr(e, l) && e.push(l);
        }), e.sort();
      }
      function io(e) {
        if (e instanceof ce)
          return e.clone();
        var t = new St(e.__wrapped__, e.__chain__);
        return t.__actions__ = at(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Wc(e, t, n) {
        (n ? rt(e, t, n) : t === i) ? t = 1 : t = ze(ne(t), 0);
        var l = e == null ? 0 : e.length;
        if (!l || t < 1)
          return [];
        for (var a = 0, s = 0, p = O(Nr(l / t)); a < l; )
          p[s++] = Ot(e, a, a += t);
        return p;
      }
      function zc(e) {
        for (var t = -1, n = e == null ? 0 : e.length, l = 0, a = []; ++t < n; ) {
          var s = e[t];
          s && (a[l++] = s);
        }
        return a;
      }
      function qc() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = O(e - 1), n = arguments[0], l = e; l--; )
          t[l - 1] = arguments[l];
        return on(ee(n) ? at(n) : [n], Xe(t, 1));
      }
      var Gc = oe(function(e, t) {
        return Me(e) ? cr(e, Xe(t, 1, Me, !0)) : [];
      }), Kc = oe(function(e, t) {
        var n = Et(t);
        return Me(n) && (n = i), Me(e) ? cr(e, Xe(t, 1, Me, !0), j(n, 2)) : [];
      }), jc = oe(function(e, t) {
        var n = Et(t);
        return Me(n) && (n = i), Me(e) ? cr(e, Xe(t, 1, Me, !0), i, n) : [];
      });
      function Yc(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (t = n || t === i ? 1 : ne(t), Ot(e, t < 0 ? 0 : t, l)) : [];
      }
      function Xc(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (t = n || t === i ? 1 : ne(t), t = l - t, Ot(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Zc(e, t) {
        return e && e.length ? Xr(e, j(t, 3), !0, !0) : [];
      }
      function Jc(e, t) {
        return e && e.length ? Xr(e, j(t, 3), !0) : [];
      }
      function Qc(e, t, n, l) {
        var a = e == null ? 0 : e.length;
        return a ? (n && typeof n != "number" && rt(e, t, n) && (n = 0, l = a), qd(e, t, n, l)) : [];
      }
      function lo(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var a = n == null ? 0 : ne(n);
        return a < 0 && (a = ze(l + a, 0)), Tr(e, j(t, 3), a);
      }
      function ao(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var a = l - 1;
        return n !== i && (a = ne(n), a = n < 0 ? ze(l + a, 0) : Je(a, l - 1)), Tr(e, j(t, 3), a, !0);
      }
      function uo(e) {
        var t = e == null ? 0 : e.length;
        return t ? Xe(e, 1) : [];
      }
      function eh(e) {
        var t = e == null ? 0 : e.length;
        return t ? Xe(e, d) : [];
      }
      function th(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === i ? 1 : ne(t), Xe(e, t)) : [];
      }
      function nh(e) {
        for (var t = -1, n = e == null ? 0 : e.length, l = {}; ++t < n; ) {
          var a = e[t];
          l[a[0]] = a[1];
        }
        return l;
      }
      function oo(e) {
        return e && e.length ? e[0] : i;
      }
      function rh(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var a = n == null ? 0 : ne(n);
        return a < 0 && (a = ze(l + a, 0)), Vn(e, t, a);
      }
      function ih(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ot(e, 0, -1) : [];
      }
      var lh = oe(function(e) {
        var t = De(e, pl);
        return t.length && t[0] === e[0] ? il(t) : [];
      }), ah = oe(function(e) {
        var t = Et(e), n = De(e, pl);
        return t === Et(n) ? t = i : n.pop(), n.length && n[0] === e[0] ? il(n, j(t, 2)) : [];
      }), uh = oe(function(e) {
        var t = Et(e), n = De(e, pl);
        return t = typeof t == "function" ? t : i, t && n.pop(), n.length && n[0] === e[0] ? il(n, i, t) : [];
      });
      function oh(e, t) {
        return e == null ? "" : id.call(e, t);
      }
      function Et(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : i;
      }
      function sh(e, t, n) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var a = l;
        return n !== i && (a = ne(n), a = a < 0 ? ze(l + a, 0) : Je(a, l - 1)), t === t ? Hf(e, t, a) : Tr(e, Ha, a, !0);
      }
      function fh(e, t) {
        return e && e.length ? bu(e, ne(t)) : i;
      }
      var dh = oe(so);
      function so(e, t) {
        return e && e.length && t && t.length ? ol(e, t) : e;
      }
      function ch(e, t, n) {
        return e && e.length && t && t.length ? ol(e, t, j(n, 2)) : e;
      }
      function hh(e, t, n) {
        return e && e.length && t && t.length ? ol(e, t, i, n) : e;
      }
      var ph = Zt(function(e, t) {
        var n = e == null ? 0 : e.length, l = el(e, t);
        return Su(e, De(t, function(a) {
          return Jt(a, n) ? +a : a;
        }).sort(Du)), l;
      });
      function mh(e, t) {
        var n = [];
        if (!(e && e.length))
          return n;
        var l = -1, a = [], s = e.length;
        for (t = j(t, 3); ++l < s; ) {
          var p = e[l];
          t(p, l, e) && (n.push(p), a.push(l));
        }
        return Su(e, a), n;
      }
      function Ll(e) {
        return e == null ? e : od.call(e);
      }
      function gh(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (n && typeof n != "number" && rt(e, t, n) ? (t = 0, n = l) : (t = t == null ? 0 : ne(t), n = n === i ? l : ne(n)), Ot(e, t, n)) : [];
      }
      function vh(e, t) {
        return Yr(e, t);
      }
      function yh(e, t, n) {
        return dl(e, t, j(n, 2));
      }
      function bh(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var l = Yr(e, t);
          if (l < n && It(e[l], t))
            return l;
        }
        return -1;
      }
      function wh(e, t) {
        return Yr(e, t, !0);
      }
      function xh(e, t, n) {
        return dl(e, t, j(n, 2), !0);
      }
      function Sh(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var l = Yr(e, t, !0) - 1;
          if (It(e[l], t))
            return l;
        }
        return -1;
      }
      function Ah(e) {
        return e && e.length ? Ou(e) : [];
      }
      function Oh(e, t) {
        return e && e.length ? Ou(e, j(t, 2)) : [];
      }
      function Eh(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ot(e, 1, t) : [];
      }
      function _h(e, t, n) {
        return e && e.length ? (t = n || t === i ? 1 : ne(t), Ot(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Ch(e, t, n) {
        var l = e == null ? 0 : e.length;
        return l ? (t = n || t === i ? 1 : ne(t), t = l - t, Ot(e, t < 0 ? 0 : t, l)) : [];
      }
      function Lh(e, t) {
        return e && e.length ? Xr(e, j(t, 3), !1, !0) : [];
      }
      function Th(e, t) {
        return e && e.length ? Xr(e, j(t, 3)) : [];
      }
      var $h = oe(function(e) {
        return cn(Xe(e, 1, Me, !0));
      }), kh = oe(function(e) {
        var t = Et(e);
        return Me(t) && (t = i), cn(Xe(e, 1, Me, !0), j(t, 2));
      }), Dh = oe(function(e) {
        var t = Et(e);
        return t = typeof t == "function" ? t : i, cn(Xe(e, 1, Me, !0), i, t);
      });
      function Ph(e) {
        return e && e.length ? cn(e) : [];
      }
      function Ih(e, t) {
        return e && e.length ? cn(e, j(t, 2)) : [];
      }
      function Rh(e, t) {
        return t = typeof t == "function" ? t : i, e && e.length ? cn(e, i, t) : [];
      }
      function Tl(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = un(e, function(n) {
          if (Me(n))
            return t = ze(n.length, t), !0;
        }), Gi(t, function(n) {
          return De(e, Wi(n));
        });
      }
      function fo(e, t) {
        if (!(e && e.length))
          return [];
        var n = Tl(e);
        return t == null ? n : De(n, function(l) {
          return ct(t, i, l);
        });
      }
      var Bh = oe(function(e, t) {
        return Me(e) ? cr(e, t) : [];
      }), Vh = oe(function(e) {
        return hl(un(e, Me));
      }), Fh = oe(function(e) {
        var t = Et(e);
        return Me(t) && (t = i), hl(un(e, Me), j(t, 2));
      }), Mh = oe(function(e) {
        var t = Et(e);
        return t = typeof t == "function" ? t : i, hl(un(e, Me), i, t);
      }), Nh = oe(Tl);
      function Uh(e, t) {
        return Lu(e || [], t || [], dr);
      }
      function Hh(e, t) {
        return Lu(e || [], t || [], mr);
      }
      var Wh = oe(function(e) {
        var t = e.length, n = t > 1 ? e[t - 1] : i;
        return n = typeof n == "function" ? (e.pop(), n) : i, fo(e, n);
      });
      function co(e) {
        var t = o(e);
        return t.__chain__ = !0, t;
      }
      function zh(e, t) {
        return t(e), e;
      }
      function li(e, t) {
        return t(e);
      }
      var qh = Zt(function(e) {
        var t = e.length, n = t ? e[0] : 0, l = this.__wrapped__, a = function(s) {
          return el(s, e);
        };
        return t > 1 || this.__actions__.length || !(l instanceof ce) || !Jt(n) ? this.thru(a) : (l = l.slice(n, +n + (t ? 1 : 0)), l.__actions__.push({
          func: li,
          args: [a],
          thisArg: i
        }), new St(l, this.__chain__).thru(function(s) {
          return t && !s.length && s.push(i), s;
        }));
      });
      function Gh() {
        return co(this);
      }
      function Kh() {
        return new St(this.value(), this.__chain__);
      }
      function jh() {
        this.__values__ === i && (this.__values__ = _o(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Yh() {
        return this;
      }
      function Xh(e) {
        for (var t, n = this; n instanceof zr; ) {
          var l = io(n);
          l.__index__ = 0, l.__values__ = i, t ? a.__wrapped__ = l : t = l;
          var a = l;
          n = n.__wrapped__;
        }
        return a.__wrapped__ = e, t;
      }
      function Zh() {
        var e = this.__wrapped__;
        if (e instanceof ce) {
          var t = e;
          return this.__actions__.length && (t = new ce(this)), t = t.reverse(), t.__actions__.push({
            func: li,
            args: [Ll],
            thisArg: i
          }), new St(t, this.__chain__);
        }
        return this.thru(Ll);
      }
      function Jh() {
        return Cu(this.__wrapped__, this.__actions__);
      }
      var Qh = Zr(function(e, t, n) {
        Ae.call(e, n) ? ++e[n] : Yt(e, n, 1);
      });
      function ep(e, t, n) {
        var l = ee(e) ? Na : zd;
        return n && rt(e, t, n) && (t = i), l(e, j(t, 3));
      }
      function tp(e, t) {
        var n = ee(e) ? un : fu;
        return n(e, j(t, 3));
      }
      var np = Fu(lo), rp = Fu(ao);
      function ip(e, t) {
        return Xe(ai(e, t), 1);
      }
      function lp(e, t) {
        return Xe(ai(e, t), d);
      }
      function ap(e, t, n) {
        return n = n === i ? 1 : ne(n), Xe(ai(e, t), n);
      }
      function ho(e, t) {
        var n = ee(e) ? wt : dn;
        return n(e, j(t, 3));
      }
      function po(e, t) {
        var n = ee(e) ? Ef : su;
        return n(e, j(t, 3));
      }
      var up = Zr(function(e, t, n) {
        Ae.call(e, n) ? e[n].push(t) : Yt(e, n, [t]);
      });
      function op(e, t, n, l) {
        e = ut(e) ? e : Yn(e), n = n && !l ? ne(n) : 0;
        var a = e.length;
        return n < 0 && (n = ze(a + n, 0)), di(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && Vn(e, t, n) > -1;
      }
      var sp = oe(function(e, t, n) {
        var l = -1, a = typeof t == "function", s = ut(e) ? O(e.length) : [];
        return dn(e, function(p) {
          s[++l] = a ? ct(t, p, n) : hr(p, t, n);
        }), s;
      }), fp = Zr(function(e, t, n) {
        Yt(e, n, t);
      });
      function ai(e, t) {
        var n = ee(e) ? De : gu;
        return n(e, j(t, 3));
      }
      function dp(e, t, n, l) {
        return e == null ? [] : (ee(t) || (t = t == null ? [] : [t]), n = l ? i : n, ee(n) || (n = n == null ? [] : [n]), wu(e, t, n));
      }
      var cp = Zr(function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function hp(e, t, n) {
        var l = ee(e) ? Ui : za, a = arguments.length < 3;
        return l(e, j(t, 4), n, a, dn);
      }
      function pp(e, t, n) {
        var l = ee(e) ? _f : za, a = arguments.length < 3;
        return l(e, j(t, 4), n, a, su);
      }
      function mp(e, t) {
        var n = ee(e) ? un : fu;
        return n(e, si(j(t, 3)));
      }
      function gp(e) {
        var t = ee(e) ? lu : oc;
        return t(e);
      }
      function vp(e, t, n) {
        (n ? rt(e, t, n) : t === i) ? t = 1 : t = ne(t);
        var l = ee(e) ? Md : sc;
        return l(e, t);
      }
      function yp(e) {
        var t = ee(e) ? Nd : dc;
        return t(e);
      }
      function bp(e) {
        if (e == null)
          return 0;
        if (ut(e))
          return di(e) ? Mn(e) : e.length;
        var t = Qe(e);
        return t == Re || t == kt ? e.size : al(e).length;
      }
      function wp(e, t, n) {
        var l = ee(e) ? Hi : cc;
        return n && rt(e, t, n) && (t = i), l(e, j(t, 3));
      }
      var xp = oe(function(e, t) {
        if (e == null)
          return [];
        var n = t.length;
        return n > 1 && rt(e, t[0], t[1]) ? t = [] : n > 2 && rt(t[0], t[1], t[2]) && (t = [t[0]]), wu(e, Xe(t, 1), []);
      }), ui = td || function() {
        return Ye.Date.now();
      };
      function Sp(e, t) {
        if (typeof t != "function")
          throw new xt(h);
        return e = ne(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function mo(e, t, n) {
        return t = n ? i : t, t = e && t == null ? e.length : t, Xt(e, N, i, i, i, i, t);
      }
      function go(e, t) {
        var n;
        if (typeof t != "function")
          throw new xt(h);
        return e = ne(e), function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = i), n;
        };
      }
      var $l = oe(function(e, t, n) {
        var l = ye;
        if (n.length) {
          var a = sn(n, Kn($l));
          l |= xe;
        }
        return Xt(e, l, t, n, a);
      }), vo = oe(function(e, t, n) {
        var l = ye | Ue;
        if (n.length) {
          var a = sn(n, Kn(vo));
          l |= xe;
        }
        return Xt(t, l, e, n, a);
      });
      function yo(e, t, n) {
        t = n ? i : t;
        var l = Xt(e, fe, i, i, i, i, i, t);
        return l.placeholder = yo.placeholder, l;
      }
      function bo(e, t, n) {
        t = n ? i : t;
        var l = Xt(e, U, i, i, i, i, i, t);
        return l.placeholder = bo.placeholder, l;
      }
      function wo(e, t, n) {
        var l, a, s, p, y, x, $ = 0, k = !1, D = !1, R = !0;
        if (typeof e != "function")
          throw new xt(h);
        t = _t(t) || 0, Pe(n) && (k = !!n.leading, D = "maxWait" in n, s = D ? ze(_t(n.maxWait) || 0, t) : s, R = "trailing" in n ? !!n.trailing : R);
        function H(Ne) {
          var Rt = l, tn = a;
          return l = a = i, $ = Ne, p = e.apply(tn, Rt), p;
        }
        function X(Ne) {
          return $ = Ne, y = yr(se, t), k ? H(Ne) : p;
        }
        function re(Ne) {
          var Rt = Ne - x, tn = Ne - $, Mo = t - Rt;
          return D ? Je(Mo, s - tn) : Mo;
        }
        function Z(Ne) {
          var Rt = Ne - x, tn = Ne - $;
          return x === i || Rt >= t || Rt < 0 || D && tn >= s;
        }
        function se() {
          var Ne = ui();
          if (Z(Ne))
            return pe(Ne);
          y = yr(se, re(Ne));
        }
        function pe(Ne) {
          return y = i, R && l ? H(Ne) : (l = a = i, p);
        }
        function gt() {
          y !== i && Tu(y), $ = 0, l = x = a = y = i;
        }
        function it() {
          return y === i ? p : pe(ui());
        }
        function vt() {
          var Ne = ui(), Rt = Z(Ne);
          if (l = arguments, a = this, x = Ne, Rt) {
            if (y === i)
              return X(x);
            if (D)
              return Tu(y), y = yr(se, t), H(x);
          }
          return y === i && (y = yr(se, t)), p;
        }
        return vt.cancel = gt, vt.flush = it, vt;
      }
      var Ap = oe(function(e, t) {
        return ou(e, 1, t);
      }), Op = oe(function(e, t, n) {
        return ou(e, _t(t) || 0, n);
      });
      function Ep(e) {
        return Xt(e, le);
      }
      function oi(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new xt(h);
        var n = function() {
          var l = arguments, a = t ? t.apply(this, l) : l[0], s = n.cache;
          if (s.has(a))
            return s.get(a);
          var p = e.apply(this, l);
          return n.cache = s.set(a, p) || s, p;
        };
        return n.cache = new (oi.Cache || jt)(), n;
      }
      oi.Cache = jt;
      function si(e) {
        if (typeof e != "function")
          throw new xt(h);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function _p(e) {
        return go(2, e);
      }
      var Cp = hc(function(e, t) {
        t = t.length == 1 && ee(t[0]) ? De(t[0], ht(j())) : De(Xe(t, 1), ht(j()));
        var n = t.length;
        return oe(function(l) {
          for (var a = -1, s = Je(l.length, n); ++a < s; )
            l[a] = t[a].call(this, l[a]);
          return ct(e, this, l);
        });
      }), kl = oe(function(e, t) {
        var n = sn(t, Kn(kl));
        return Xt(e, xe, i, t, n);
      }), xo = oe(function(e, t) {
        var n = sn(t, Kn(xo));
        return Xt(e, F, i, t, n);
      }), Lp = Zt(function(e, t) {
        return Xt(e, G, i, i, i, t);
      });
      function Tp(e, t) {
        if (typeof e != "function")
          throw new xt(h);
        return t = t === i ? t : ne(t), oe(e, t);
      }
      function $p(e, t) {
        if (typeof e != "function")
          throw new xt(h);
        return t = t == null ? 0 : ze(ne(t), 0), oe(function(n) {
          var l = n[t], a = pn(n, 0, t);
          return l && on(a, l), ct(e, this, a);
        });
      }
      function kp(e, t, n) {
        var l = !0, a = !0;
        if (typeof e != "function")
          throw new xt(h);
        return Pe(n) && (l = "leading" in n ? !!n.leading : l, a = "trailing" in n ? !!n.trailing : a), wo(e, t, {
          leading: l,
          maxWait: t,
          trailing: a
        });
      }
      function Dp(e) {
        return mo(e, 1);
      }
      function Pp(e, t) {
        return kl(ml(t), e);
      }
      function Ip() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ee(e) ? e : [e];
      }
      function Rp(e) {
        return At(e, z);
      }
      function Bp(e, t) {
        return t = typeof t == "function" ? t : i, At(e, z, t);
      }
      function Vp(e) {
        return At(e, B | z);
      }
      function Fp(e, t) {
        return t = typeof t == "function" ? t : i, At(e, B | z, t);
      }
      function Mp(e, t) {
        return t == null || uu(e, t, Ke(t));
      }
      function It(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Np = ti(rl), Up = ti(function(e, t) {
        return e >= t;
      }), Tn = hu(function() {
        return arguments;
      }()) ? hu : function(e) {
        return Be(e) && Ae.call(e, "callee") && !Qa.call(e, "callee");
      }, ee = O.isArray, Hp = Ia ? ht(Ia) : Xd;
      function ut(e) {
        return e != null && fi(e.length) && !Qt(e);
      }
      function Me(e) {
        return Be(e) && ut(e);
      }
      function Wp(e) {
        return e === !0 || e === !1 || Be(e) && nt(e) == he;
      }
      var mn = rd || Hl, zp = Ra ? ht(Ra) : Zd;
      function qp(e) {
        return Be(e) && e.nodeType === 1 && !br(e);
      }
      function Gp(e) {
        if (e == null)
          return !0;
        if (ut(e) && (ee(e) || typeof e == "string" || typeof e.splice == "function" || mn(e) || jn(e) || Tn(e)))
          return !e.length;
        var t = Qe(e);
        if (t == Re || t == kt)
          return !e.size;
        if (vr(e))
          return !al(e).length;
        for (var n in e)
          if (Ae.call(e, n))
            return !1;
        return !0;
      }
      function Kp(e, t) {
        return pr(e, t);
      }
      function jp(e, t, n) {
        n = typeof n == "function" ? n : i;
        var l = n ? n(e, t) : i;
        return l === i ? pr(e, t, i, n) : !!l;
      }
      function Dl(e) {
        if (!Be(e))
          return !1;
        var t = nt(e);
        return t == He || t == dt || typeof e.message == "string" && typeof e.name == "string" && !br(e);
      }
      function Yp(e) {
        return typeof e == "number" && tu(e);
      }
      function Qt(e) {
        if (!Pe(e))
          return !1;
        var t = nt(e);
        return t == je || t == an || t == ue || t == ys;
      }
      function So(e) {
        return typeof e == "number" && e == ne(e);
      }
      function fi(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= m;
      }
      function Pe(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Be(e) {
        return e != null && typeof e == "object";
      }
      var Ao = Ba ? ht(Ba) : Qd;
      function Xp(e, t) {
        return e === t || ll(e, t, Sl(t));
      }
      function Zp(e, t, n) {
        return n = typeof n == "function" ? n : i, ll(e, t, Sl(t), n);
      }
      function Jp(e) {
        return Oo(e) && e != +e;
      }
      function Qp(e) {
        if (Bc(e))
          throw new J(v);
        return pu(e);
      }
      function em(e) {
        return e === null;
      }
      function tm(e) {
        return e == null;
      }
      function Oo(e) {
        return typeof e == "number" || Be(e) && nt(e) == tt;
      }
      function br(e) {
        if (!Be(e) || nt(e) != Gt)
          return !1;
        var t = Vr(e);
        if (t === null)
          return !0;
        var n = Ae.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Pr.call(n) == Zf;
      }
      var Pl = Va ? ht(Va) : ec;
      function nm(e) {
        return So(e) && e >= -m && e <= m;
      }
      var Eo = Fa ? ht(Fa) : tc;
      function di(e) {
        return typeof e == "string" || !ee(e) && Be(e) && nt(e) == nr;
      }
      function mt(e) {
        return typeof e == "symbol" || Be(e) && nt(e) == Or;
      }
      var jn = Ma ? ht(Ma) : nc;
      function rm(e) {
        return e === i;
      }
      function im(e) {
        return Be(e) && Qe(e) == rr;
      }
      function lm(e) {
        return Be(e) && nt(e) == ws;
      }
      var am = ti(ul), um = ti(function(e, t) {
        return e <= t;
      });
      function _o(e) {
        if (!e)
          return [];
        if (ut(e))
          return di(e) ? Dt(e) : at(e);
        if (ar && e[ar])
          return Mf(e[ar]());
        var t = Qe(e), n = t == Re ? ji : t == kt ? $r : Yn;
        return n(e);
      }
      function en(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = _t(e), e === d || e === -d) {
          var t = e < 0 ? -1 : 1;
          return t * E;
        }
        return e === e ? e : 0;
      }
      function ne(e) {
        var t = en(e), n = t % 1;
        return t === t ? n ? t - n : t : 0;
      }
      function Co(e) {
        return e ? En(ne(e), 0, P) : 0;
      }
      function _t(e) {
        if (typeof e == "number")
          return e;
        if (mt(e))
          return C;
        if (Pe(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Pe(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = qa(e);
        var n = Us.test(e);
        return n || Ws.test(e) ? Sf(e.slice(2), n ? 2 : 8) : Ns.test(e) ? C : +e;
      }
      function Lo(e) {
        return Nt(e, ot(e));
      }
      function om(e) {
        return e ? En(ne(e), -m, m) : e === 0 ? e : 0;
      }
      function Se(e) {
        return e == null ? "" : pt(e);
      }
      var sm = qn(function(e, t) {
        if (vr(t) || ut(t)) {
          Nt(t, Ke(t), e);
          return;
        }
        for (var n in t)
          Ae.call(t, n) && dr(e, n, t[n]);
      }), To = qn(function(e, t) {
        Nt(t, ot(t), e);
      }), ci = qn(function(e, t, n, l) {
        Nt(t, ot(t), e, l);
      }), fm = qn(function(e, t, n, l) {
        Nt(t, Ke(t), e, l);
      }), dm = Zt(el);
      function cm(e, t) {
        var n = zn(e);
        return t == null ? n : au(n, t);
      }
      var hm = oe(function(e, t) {
        e = _e(e);
        var n = -1, l = t.length, a = l > 2 ? t[2] : i;
        for (a && rt(t[0], t[1], a) && (l = 1); ++n < l; )
          for (var s = t[n], p = ot(s), y = -1, x = p.length; ++y < x; ) {
            var $ = p[y], k = e[$];
            (k === i || It(k, Un[$]) && !Ae.call(e, $)) && (e[$] = s[$]);
          }
        return e;
      }), pm = oe(function(e) {
        return e.push(i, qu), ct($o, i, e);
      });
      function mm(e, t) {
        return Ua(e, j(t, 3), Mt);
      }
      function gm(e, t) {
        return Ua(e, j(t, 3), nl);
      }
      function vm(e, t) {
        return e == null ? e : tl(e, j(t, 3), ot);
      }
      function ym(e, t) {
        return e == null ? e : du(e, j(t, 3), ot);
      }
      function bm(e, t) {
        return e && Mt(e, j(t, 3));
      }
      function wm(e, t) {
        return e && nl(e, j(t, 3));
      }
      function xm(e) {
        return e == null ? [] : Kr(e, Ke(e));
      }
      function Sm(e) {
        return e == null ? [] : Kr(e, ot(e));
      }
      function Il(e, t, n) {
        var l = e == null ? i : _n(e, t);
        return l === i ? n : l;
      }
      function Am(e, t) {
        return e != null && ju(e, t, Gd);
      }
      function Rl(e, t) {
        return e != null && ju(e, t, Kd);
      }
      var Om = Nu(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = Ir.call(t)), e[t] = n;
      }, Vl(st)), Em = Nu(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = Ir.call(t)), Ae.call(e, t) ? e[t].push(n) : e[t] = [n];
      }, j), _m = oe(hr);
      function Ke(e) {
        return ut(e) ? iu(e) : al(e);
      }
      function ot(e) {
        return ut(e) ? iu(e, !0) : rc(e);
      }
      function Cm(e, t) {
        var n = {};
        return t = j(t, 3), Mt(e, function(l, a, s) {
          Yt(n, t(l, a, s), l);
        }), n;
      }
      function Lm(e, t) {
        var n = {};
        return t = j(t, 3), Mt(e, function(l, a, s) {
          Yt(n, a, t(l, a, s));
        }), n;
      }
      var Tm = qn(function(e, t, n) {
        jr(e, t, n);
      }), $o = qn(function(e, t, n, l) {
        jr(e, t, n, l);
      }), $m = Zt(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var l = !1;
        t = De(t, function(s) {
          return s = hn(s, e), l || (l = s.length > 1), s;
        }), Nt(e, wl(e), n), l && (n = At(n, B | V | z, Oc));
        for (var a = t.length; a--; )
          cl(n, t[a]);
        return n;
      });
      function km(e, t) {
        return ko(e, si(j(t)));
      }
      var Dm = Zt(function(e, t) {
        return e == null ? {} : lc(e, t);
      });
      function ko(e, t) {
        if (e == null)
          return {};
        var n = De(wl(e), function(l) {
          return [l];
        });
        return t = j(t), xu(e, n, function(l, a) {
          return t(l, a[0]);
        });
      }
      function Pm(e, t, n) {
        t = hn(t, e);
        var l = -1, a = t.length;
        for (a || (a = 1, e = i); ++l < a; ) {
          var s = e == null ? i : e[Ut(t[l])];
          s === i && (l = a, s = n), e = Qt(s) ? s.call(e) : s;
        }
        return e;
      }
      function Im(e, t, n) {
        return e == null ? e : mr(e, t, n);
      }
      function Rm(e, t, n, l) {
        return l = typeof l == "function" ? l : i, e == null ? e : mr(e, t, n, l);
      }
      var Do = Wu(Ke), Po = Wu(ot);
      function Bm(e, t, n) {
        var l = ee(e), a = l || mn(e) || jn(e);
        if (t = j(t, 4), n == null) {
          var s = e && e.constructor;
          a ? n = l ? new s() : [] : Pe(e) ? n = Qt(s) ? zn(Vr(e)) : {} : n = {};
        }
        return (a ? wt : Mt)(e, function(p, y, x) {
          return t(n, p, y, x);
        }), n;
      }
      function Vm(e, t) {
        return e == null ? !0 : cl(e, t);
      }
      function Fm(e, t, n) {
        return e == null ? e : _u(e, t, ml(n));
      }
      function Mm(e, t, n, l) {
        return l = typeof l == "function" ? l : i, e == null ? e : _u(e, t, ml(n), l);
      }
      function Yn(e) {
        return e == null ? [] : Ki(e, Ke(e));
      }
      function Nm(e) {
        return e == null ? [] : Ki(e, ot(e));
      }
      function Um(e, t, n) {
        return n === i && (n = t, t = i), n !== i && (n = _t(n), n = n === n ? n : 0), t !== i && (t = _t(t), t = t === t ? t : 0), En(_t(e), t, n);
      }
      function Hm(e, t, n) {
        return t = en(t), n === i ? (n = t, t = 0) : n = en(n), e = _t(e), jd(e, t, n);
      }
      function Wm(e, t, n) {
        if (n && typeof n != "boolean" && rt(e, t, n) && (t = n = i), n === i && (typeof t == "boolean" ? (n = t, t = i) : typeof e == "boolean" && (n = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = en(e), t === i ? (t = e, e = 0) : t = en(t)), e > t) {
          var l = e;
          e = t, t = l;
        }
        if (n || e % 1 || t % 1) {
          var a = nu();
          return Je(e + a * (t - e + xf("1e-" + ((a + "").length - 1))), t);
        }
        return sl(e, t);
      }
      var zm = Gn(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? Io(t) : t);
      });
      function Io(e) {
        return Bl(Se(e).toLowerCase());
      }
      function Ro(e) {
        return e = Se(e), e && e.replace(qs, If).replace(df, "");
      }
      function qm(e, t, n) {
        e = Se(e), t = pt(t);
        var l = e.length;
        n = n === i ? l : En(ne(n), 0, l);
        var a = n;
        return n -= t.length, n >= 0 && e.slice(n, a) == t;
      }
      function Gm(e) {
        return e = Se(e), e && Es.test(e) ? e.replace(da, Rf) : e;
      }
      function Km(e) {
        return e = Se(e), e && ks.test(e) ? e.replace(ki, "\\$&") : e;
      }
      var jm = Gn(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      }), Ym = Gn(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      }), Xm = Vu("toLowerCase");
      function Zm(e, t, n) {
        e = Se(e), t = ne(t);
        var l = t ? Mn(e) : 0;
        if (!t || l >= t)
          return e;
        var a = (t - l) / 2;
        return ei(Ur(a), n) + e + ei(Nr(a), n);
      }
      function Jm(e, t, n) {
        e = Se(e), t = ne(t);
        var l = t ? Mn(e) : 0;
        return t && l < t ? e + ei(t - l, n) : e;
      }
      function Qm(e, t, n) {
        e = Se(e), t = ne(t);
        var l = t ? Mn(e) : 0;
        return t && l < t ? ei(t - l, n) + e : e;
      }
      function eg(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), ud(Se(e).replace(Di, ""), t || 0);
      }
      function tg(e, t, n) {
        return (n ? rt(e, t, n) : t === i) ? t = 1 : t = ne(t), fl(Se(e), t);
      }
      function ng() {
        var e = arguments, t = Se(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var rg = Gn(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      });
      function ig(e, t, n) {
        return n && typeof n != "number" && rt(e, t, n) && (t = n = i), n = n === i ? P : n >>> 0, n ? (e = Se(e), e && (typeof t == "string" || t != null && !Pl(t)) && (t = pt(t), !t && Fn(e)) ? pn(Dt(e), 0, n) : e.split(t, n)) : [];
      }
      var lg = Gn(function(e, t, n) {
        return e + (n ? " " : "") + Bl(t);
      });
      function ag(e, t, n) {
        return e = Se(e), n = n == null ? 0 : En(ne(n), 0, e.length), t = pt(t), e.slice(n, n + t.length) == t;
      }
      function ug(e, t, n) {
        var l = o.templateSettings;
        n && rt(e, t, n) && (t = i), e = Se(e), t = ci({}, t, l, zu);
        var a = ci({}, t.imports, l.imports, zu), s = Ke(a), p = Ki(a, s), y, x, $ = 0, k = t.interpolate || Er, D = "__p += '", R = Yi(
          (t.escape || Er).source + "|" + k.source + "|" + (k === ca ? Ms : Er).source + "|" + (t.evaluate || Er).source + "|$",
          "g"
        ), H = "//# sourceURL=" + (Ae.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++gf + "]") + `
`;
        e.replace(R, function(Z, se, pe, gt, it, vt) {
          return pe || (pe = gt), D += e.slice($, vt).replace(Gs, Bf), se && (y = !0, D += `' +
__e(` + se + `) +
'`), it && (x = !0, D += `';
` + it + `;
__p += '`), pe && (D += `' +
((__t = (` + pe + `)) == null ? '' : __t) +
'`), $ = vt + Z.length, Z;
        }), D += `';
`;
        var X = Ae.call(t, "variable") && t.variable;
        if (!X)
          D = `with (obj) {
` + D + `
}
`;
        else if (Vs.test(X))
          throw new J(b);
        D = (x ? D.replace(xs, "") : D).replace(Ss, "$1").replace(As, "$1;"), D = "function(" + (X || "obj") + `) {
` + (X ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var re = Vo(function() {
          return we(s, H + "return " + D).apply(i, p);
        });
        if (re.source = D, Dl(re))
          throw re;
        return re;
      }
      function og(e) {
        return Se(e).toLowerCase();
      }
      function sg(e) {
        return Se(e).toUpperCase();
      }
      function fg(e, t, n) {
        if (e = Se(e), e && (n || t === i))
          return qa(e);
        if (!e || !(t = pt(t)))
          return e;
        var l = Dt(e), a = Dt(t), s = Ga(l, a), p = Ka(l, a) + 1;
        return pn(l, s, p).join("");
      }
      function dg(e, t, n) {
        if (e = Se(e), e && (n || t === i))
          return e.slice(0, Ya(e) + 1);
        if (!e || !(t = pt(t)))
          return e;
        var l = Dt(e), a = Ka(l, Dt(t)) + 1;
        return pn(l, 0, a).join("");
      }
      function cg(e, t, n) {
        if (e = Se(e), e && (n || t === i))
          return e.replace(Di, "");
        if (!e || !(t = pt(t)))
          return e;
        var l = Dt(e), a = Ga(l, Dt(t));
        return pn(l, a).join("");
      }
      function hg(e, t) {
        var n = de, l = $e;
        if (Pe(t)) {
          var a = "separator" in t ? t.separator : a;
          n = "length" in t ? ne(t.length) : n, l = "omission" in t ? pt(t.omission) : l;
        }
        e = Se(e);
        var s = e.length;
        if (Fn(e)) {
          var p = Dt(e);
          s = p.length;
        }
        if (n >= s)
          return e;
        var y = n - Mn(l);
        if (y < 1)
          return l;
        var x = p ? pn(p, 0, y).join("") : e.slice(0, y);
        if (a === i)
          return x + l;
        if (p && (y += x.length - y), Pl(a)) {
          if (e.slice(y).search(a)) {
            var $, k = x;
            for (a.global || (a = Yi(a.source, Se(ha.exec(a)) + "g")), a.lastIndex = 0; $ = a.exec(k); )
              var D = $.index;
            x = x.slice(0, D === i ? y : D);
          }
        } else if (e.indexOf(pt(a), y) != y) {
          var R = x.lastIndexOf(a);
          R > -1 && (x = x.slice(0, R));
        }
        return x + l;
      }
      function pg(e) {
        return e = Se(e), e && Os.test(e) ? e.replace(fa, Wf) : e;
      }
      var mg = Gn(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      }), Bl = Vu("toUpperCase");
      function Bo(e, t, n) {
        return e = Se(e), t = n ? i : t, t === i ? Ff(e) ? Gf(e) : Tf(e) : e.match(t) || [];
      }
      var Vo = oe(function(e, t) {
        try {
          return ct(e, i, t);
        } catch (n) {
          return Dl(n) ? n : new J(n);
        }
      }), gg = Zt(function(e, t) {
        return wt(t, function(n) {
          n = Ut(n), Yt(e, n, $l(e[n], e));
        }), e;
      });
      function vg(e) {
        var t = e == null ? 0 : e.length, n = j();
        return e = t ? De(e, function(l) {
          if (typeof l[1] != "function")
            throw new xt(h);
          return [n(l[0]), l[1]];
        }) : [], oe(function(l) {
          for (var a = -1; ++a < t; ) {
            var s = e[a];
            if (ct(s[0], this, l))
              return ct(s[1], this, l);
          }
        });
      }
      function yg(e) {
        return Wd(At(e, B));
      }
      function Vl(e) {
        return function() {
          return e;
        };
      }
      function bg(e, t) {
        return e == null || e !== e ? t : e;
      }
      var wg = Mu(), xg = Mu(!0);
      function st(e) {
        return e;
      }
      function Fl(e) {
        return mu(typeof e == "function" ? e : At(e, B));
      }
      function Sg(e) {
        return vu(At(e, B));
      }
      function Ag(e, t) {
        return yu(e, At(t, B));
      }
      var Og = oe(function(e, t) {
        return function(n) {
          return hr(n, e, t);
        };
      }), Eg = oe(function(e, t) {
        return function(n) {
          return hr(e, n, t);
        };
      });
      function Ml(e, t, n) {
        var l = Ke(t), a = Kr(t, l);
        n == null && !(Pe(t) && (a.length || !l.length)) && (n = t, t = e, e = this, a = Kr(t, Ke(t)));
        var s = !(Pe(n) && "chain" in n) || !!n.chain, p = Qt(e);
        return wt(a, function(y) {
          var x = t[y];
          e[y] = x, p && (e.prototype[y] = function() {
            var $ = this.__chain__;
            if (s || $) {
              var k = e(this.__wrapped__), D = k.__actions__ = at(this.__actions__);
              return D.push({ func: x, args: arguments, thisArg: e }), k.__chain__ = $, k;
            }
            return x.apply(e, on([this.value()], arguments));
          });
        }), e;
      }
      function _g() {
        return Ye._ === this && (Ye._ = Jf), this;
      }
      function Nl() {
      }
      function Cg(e) {
        return e = ne(e), oe(function(t) {
          return bu(t, e);
        });
      }
      var Lg = vl(De), Tg = vl(Na), $g = vl(Hi);
      function Fo(e) {
        return Ol(e) ? Wi(Ut(e)) : ac(e);
      }
      function kg(e) {
        return function(t) {
          return e == null ? i : _n(e, t);
        };
      }
      var Dg = Uu(), Pg = Uu(!0);
      function Ul() {
        return [];
      }
      function Hl() {
        return !1;
      }
      function Ig() {
        return {};
      }
      function Rg() {
        return "";
      }
      function Bg() {
        return !0;
      }
      function Vg(e, t) {
        if (e = ne(e), e < 1 || e > m)
          return [];
        var n = P, l = Je(e, P);
        t = j(t), e -= P;
        for (var a = Gi(l, t); ++n < e; )
          t(n);
        return a;
      }
      function Fg(e) {
        return ee(e) ? De(e, Ut) : mt(e) ? [e] : at(ro(Se(e)));
      }
      function Mg(e) {
        var t = ++Xf;
        return Se(e) + t;
      }
      var Ng = Qr(function(e, t) {
        return e + t;
      }, 0), Ug = yl("ceil"), Hg = Qr(function(e, t) {
        return e / t;
      }, 1), Wg = yl("floor");
      function zg(e) {
        return e && e.length ? Gr(e, st, rl) : i;
      }
      function qg(e, t) {
        return e && e.length ? Gr(e, j(t, 2), rl) : i;
      }
      function Gg(e) {
        return Wa(e, st);
      }
      function Kg(e, t) {
        return Wa(e, j(t, 2));
      }
      function jg(e) {
        return e && e.length ? Gr(e, st, ul) : i;
      }
      function Yg(e, t) {
        return e && e.length ? Gr(e, j(t, 2), ul) : i;
      }
      var Xg = Qr(function(e, t) {
        return e * t;
      }, 1), Zg = yl("round"), Jg = Qr(function(e, t) {
        return e - t;
      }, 0);
      function Qg(e) {
        return e && e.length ? qi(e, st) : 0;
      }
      function ev(e, t) {
        return e && e.length ? qi(e, j(t, 2)) : 0;
      }
      return o.after = Sp, o.ary = mo, o.assign = sm, o.assignIn = To, o.assignInWith = ci, o.assignWith = fm, o.at = dm, o.before = go, o.bind = $l, o.bindAll = gg, o.bindKey = vo, o.castArray = Ip, o.chain = co, o.chunk = Wc, o.compact = zc, o.concat = qc, o.cond = vg, o.conforms = yg, o.constant = Vl, o.countBy = Qh, o.create = cm, o.curry = yo, o.curryRight = bo, o.debounce = wo, o.defaults = hm, o.defaultsDeep = pm, o.defer = Ap, o.delay = Op, o.difference = Gc, o.differenceBy = Kc, o.differenceWith = jc, o.drop = Yc, o.dropRight = Xc, o.dropRightWhile = Zc, o.dropWhile = Jc, o.fill = Qc, o.filter = tp, o.flatMap = ip, o.flatMapDeep = lp, o.flatMapDepth = ap, o.flatten = uo, o.flattenDeep = eh, o.flattenDepth = th, o.flip = Ep, o.flow = wg, o.flowRight = xg, o.fromPairs = nh, o.functions = xm, o.functionsIn = Sm, o.groupBy = up, o.initial = ih, o.intersection = lh, o.intersectionBy = ah, o.intersectionWith = uh, o.invert = Om, o.invertBy = Em, o.invokeMap = sp, o.iteratee = Fl, o.keyBy = fp, o.keys = Ke, o.keysIn = ot, o.map = ai, o.mapKeys = Cm, o.mapValues = Lm, o.matches = Sg, o.matchesProperty = Ag, o.memoize = oi, o.merge = Tm, o.mergeWith = $o, o.method = Og, o.methodOf = Eg, o.mixin = Ml, o.negate = si, o.nthArg = Cg, o.omit = $m, o.omitBy = km, o.once = _p, o.orderBy = dp, o.over = Lg, o.overArgs = Cp, o.overEvery = Tg, o.overSome = $g, o.partial = kl, o.partialRight = xo, o.partition = cp, o.pick = Dm, o.pickBy = ko, o.property = Fo, o.propertyOf = kg, o.pull = dh, o.pullAll = so, o.pullAllBy = ch, o.pullAllWith = hh, o.pullAt = ph, o.range = Dg, o.rangeRight = Pg, o.rearg = Lp, o.reject = mp, o.remove = mh, o.rest = Tp, o.reverse = Ll, o.sampleSize = vp, o.set = Im, o.setWith = Rm, o.shuffle = yp, o.slice = gh, o.sortBy = xp, o.sortedUniq = Ah, o.sortedUniqBy = Oh, o.split = ig, o.spread = $p, o.tail = Eh, o.take = _h, o.takeRight = Ch, o.takeRightWhile = Lh, o.takeWhile = Th, o.tap = zh, o.throttle = kp, o.thru = li, o.toArray = _o, o.toPairs = Do, o.toPairsIn = Po, o.toPath = Fg, o.toPlainObject = Lo, o.transform = Bm, o.unary = Dp, o.union = $h, o.unionBy = kh, o.unionWith = Dh, o.uniq = Ph, o.uniqBy = Ih, o.uniqWith = Rh, o.unset = Vm, o.unzip = Tl, o.unzipWith = fo, o.update = Fm, o.updateWith = Mm, o.values = Yn, o.valuesIn = Nm, o.without = Bh, o.words = Bo, o.wrap = Pp, o.xor = Vh, o.xorBy = Fh, o.xorWith = Mh, o.zip = Nh, o.zipObject = Uh, o.zipObjectDeep = Hh, o.zipWith = Wh, o.entries = Do, o.entriesIn = Po, o.extend = To, o.extendWith = ci, Ml(o, o), o.add = Ng, o.attempt = Vo, o.camelCase = zm, o.capitalize = Io, o.ceil = Ug, o.clamp = Um, o.clone = Rp, o.cloneDeep = Vp, o.cloneDeepWith = Fp, o.cloneWith = Bp, o.conformsTo = Mp, o.deburr = Ro, o.defaultTo = bg, o.divide = Hg, o.endsWith = qm, o.eq = It, o.escape = Gm, o.escapeRegExp = Km, o.every = ep, o.find = np, o.findIndex = lo, o.findKey = mm, o.findLast = rp, o.findLastIndex = ao, o.findLastKey = gm, o.floor = Wg, o.forEach = ho, o.forEachRight = po, o.forIn = vm, o.forInRight = ym, o.forOwn = bm, o.forOwnRight = wm, o.get = Il, o.gt = Np, o.gte = Up, o.has = Am, o.hasIn = Rl, o.head = oo, o.identity = st, o.includes = op, o.indexOf = rh, o.inRange = Hm, o.invoke = _m, o.isArguments = Tn, o.isArray = ee, o.isArrayBuffer = Hp, o.isArrayLike = ut, o.isArrayLikeObject = Me, o.isBoolean = Wp, o.isBuffer = mn, o.isDate = zp, o.isElement = qp, o.isEmpty = Gp, o.isEqual = Kp, o.isEqualWith = jp, o.isError = Dl, o.isFinite = Yp, o.isFunction = Qt, o.isInteger = So, o.isLength = fi, o.isMap = Ao, o.isMatch = Xp, o.isMatchWith = Zp, o.isNaN = Jp, o.isNative = Qp, o.isNil = tm, o.isNull = em, o.isNumber = Oo, o.isObject = Pe, o.isObjectLike = Be, o.isPlainObject = br, o.isRegExp = Pl, o.isSafeInteger = nm, o.isSet = Eo, o.isString = di, o.isSymbol = mt, o.isTypedArray = jn, o.isUndefined = rm, o.isWeakMap = im, o.isWeakSet = lm, o.join = oh, o.kebabCase = jm, o.last = Et, o.lastIndexOf = sh, o.lowerCase = Ym, o.lowerFirst = Xm, o.lt = am, o.lte = um, o.max = zg, o.maxBy = qg, o.mean = Gg, o.meanBy = Kg, o.min = jg, o.minBy = Yg, o.stubArray = Ul, o.stubFalse = Hl, o.stubObject = Ig, o.stubString = Rg, o.stubTrue = Bg, o.multiply = Xg, o.nth = fh, o.noConflict = _g, o.noop = Nl, o.now = ui, o.pad = Zm, o.padEnd = Jm, o.padStart = Qm, o.parseInt = eg, o.random = Wm, o.reduce = hp, o.reduceRight = pp, o.repeat = tg, o.replace = ng, o.result = Pm, o.round = Zg, o.runInContext = w, o.sample = gp, o.size = bp, o.snakeCase = rg, o.some = wp, o.sortedIndex = vh, o.sortedIndexBy = yh, o.sortedIndexOf = bh, o.sortedLastIndex = wh, o.sortedLastIndexBy = xh, o.sortedLastIndexOf = Sh, o.startCase = lg, o.startsWith = ag, o.subtract = Jg, o.sum = Qg, o.sumBy = ev, o.template = ug, o.times = Vg, o.toFinite = en, o.toInteger = ne, o.toLength = Co, o.toLower = og, o.toNumber = _t, o.toSafeInteger = om, o.toString = Se, o.toUpper = sg, o.trim = fg, o.trimEnd = dg, o.trimStart = cg, o.truncate = hg, o.unescape = pg, o.uniqueId = Mg, o.upperCase = mg, o.upperFirst = Bl, o.each = ho, o.eachRight = po, o.first = oo, Ml(o, function() {
        var e = {};
        return Mt(o, function(t, n) {
          Ae.call(o.prototype, n) || (e[n] = t);
        }), e;
      }(), { chain: !1 }), o.VERSION = c, wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        o[e].placeholder = o;
      }), wt(["drop", "take"], function(e, t) {
        ce.prototype[e] = function(n) {
          n = n === i ? 1 : ze(ne(n), 0);
          var l = this.__filtered__ && !t ? new ce(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Je(n, l.__takeCount__) : l.__views__.push({
            size: Je(n, P),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ce.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), wt(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1, l = n == ln || n == f;
        ce.prototype[e] = function(a) {
          var s = this.clone();
          return s.__iteratees__.push({
            iteratee: j(a, 3),
            type: n
          }), s.__filtered__ = s.__filtered__ || l, s;
        };
      }), wt(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        ce.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), wt(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        ce.prototype[e] = function() {
          return this.__filtered__ ? new ce(this) : this[n](1);
        };
      }), ce.prototype.compact = function() {
        return this.filter(st);
      }, ce.prototype.find = function(e) {
        return this.filter(e).head();
      }, ce.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ce.prototype.invokeMap = oe(function(e, t) {
        return typeof e == "function" ? new ce(this) : this.map(function(n) {
          return hr(n, e, t);
        });
      }), ce.prototype.reject = function(e) {
        return this.filter(si(j(e)));
      }, ce.prototype.slice = function(e, t) {
        e = ne(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new ce(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== i && (t = ne(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
      }, ce.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ce.prototype.toArray = function() {
        return this.take(P);
      }, Mt(ce.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), l = /^(?:head|last)$/.test(t), a = o[l ? "take" + (t == "last" ? "Right" : "") : t], s = l || /^find/.test(t);
        a && (o.prototype[t] = function() {
          var p = this.__wrapped__, y = l ? [1] : arguments, x = p instanceof ce, $ = y[0], k = x || ee(p), D = function(se) {
            var pe = a.apply(o, on([se], y));
            return l && R ? pe[0] : pe;
          };
          k && n && typeof $ == "function" && $.length != 1 && (x = k = !1);
          var R = this.__chain__, H = !!this.__actions__.length, X = s && !R, re = x && !H;
          if (!s && k) {
            p = re ? p : new ce(this);
            var Z = e.apply(p, y);
            return Z.__actions__.push({ func: li, args: [D], thisArg: i }), new St(Z, R);
          }
          return X && re ? e.apply(this, y) : (Z = this.thru(D), X ? l ? Z.value()[0] : Z.value() : Z);
        });
      }), wt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = kr[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
        o.prototype[e] = function() {
          var a = arguments;
          if (l && !this.__chain__) {
            var s = this.value();
            return t.apply(ee(s) ? s : [], a);
          }
          return this[n](function(p) {
            return t.apply(ee(p) ? p : [], a);
          });
        };
      }), Mt(ce.prototype, function(e, t) {
        var n = o[t];
        if (n) {
          var l = n.name + "";
          Ae.call(Wn, l) || (Wn[l] = []), Wn[l].push({ name: t, func: n });
        }
      }), Wn[Jr(i, Ue).name] = [{
        name: "wrapper",
        func: i
      }], ce.prototype.clone = pd, ce.prototype.reverse = md, ce.prototype.value = gd, o.prototype.at = qh, o.prototype.chain = Gh, o.prototype.commit = Kh, o.prototype.next = jh, o.prototype.plant = Xh, o.prototype.reverse = Zh, o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = Jh, o.prototype.first = o.prototype.head, ar && (o.prototype[ar] = Yh), o;
    }, Nn = Kf();
    xn ? ((xn.exports = Nn)._ = Nn, Fi._ = Nn) : Ye._ = Nn;
  }).call(Jn);
})(Uv, yn);
const Hv = yn, Wv = {
  key: 1,
  class: "space-y-2 gray-300"
}, zv = { class: "flex" }, qv = ["for"], Gv = ["id", "type", "value", "placeholder", "disabled", "onInput"], Kv = ["onClick"], jv = {
  __name: "MultiInput",
  props: {
    modelValue: {},
    type: {},
    field: {},
    label: {},
    placeholder: {},
    disabled: {},
    canAdd: {
      type: Boolean,
      default: !0
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: []
    }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: u }) {
    const i = r, c = ie(Array.isArray(i.modelValue) ? i.modelValue : i.taggable && !i.modelValue ? [] : [i.modelValue]), g = te(() => c.value.map((T) => i.label ? T[i.label] + "_" + i.field + "_" + Math.random().toString(36).slice(2) : null)), v = te(() => c.value.map((T) => i.label ? T[i.label] + " " + ra(i.field) : i.placeholder));
    function h(T) {
      c.value.splice(T, 1), u("update:modelValue", c.value);
    }
    function b(T) {
      let B = T;
      i.field && (B = Hv.cloneDeep(c.value[0]), B[i.field] = T), c.value.push(B), i.taggable && i.options.push(B);
    }
    function A(T, B) {
      i.field ? c.value[T][i.field] = B : !B && c.value.length === 1 ? c.value = [] : c.value[T] = B, u("update:modelValue", c.value);
    }
    function _(T) {
      b(T), u("update:modelValue", c.value);
    }
    return (T, B) => r.taggable && r.canAdd ? (I(), Oe(K(Sr), {
      key: 0,
      modelValue: c.value,
      "onUpdate:modelValue": [
        B[0] || (B[0] = (V) => c.value = V),
        B[1] || (B[1] = (V) => T.$emit("update:modelValue", V))
      ],
      options: r.options,
      placeholder: `Type to add ${r.placeholder ?? "item"}`,
      multiple: "",
      "show-labels": !1,
      disabled: r.disabled,
      taggable: "",
      "tag-placeholder": `Create new ${r.placeholder ?? "item"}`,
      onTag: _
    }, null, 8, ["modelValue", "options", "placeholder", "disabled", "tag-placeholder"])) : (I(), W("div", Wv, [
      (I(!0), W($t, null, Wt(c.value, (V, z) => (I(), W("div", {
        class: "relative",
        key: z
      }, [
        Y("div", zv, [
          r.label ? (I(), W("label", {
            key: 0,
            for: K(g)[z],
            class: "multiple-label rounded-r-none bg-gray-300"
          }, Ce(V[r.label]), 9, qv)) : ge("", !0),
          Y("input", {
            id: K(g)[z],
            class: qe(["input-multiple flex-1", { "rounded-l-none": r.label, "rounded-r-none": r.canAdd && c.value.length > 1 }]),
            type: r.type,
            value: r.field ? V[r.field] : V,
            placeholder: K(v)[z],
            disabled: r.disabled,
            onInput: (q) => A(z, q.target.value)
          }, null, 42, Gv),
          r.canAdd && c.value.length > 1 ? (I(), W("div", {
            key: 1,
            class: "multiple-remove rounded-l-none bg-gray-200 cursor-pointer hover:bg-gray-300",
            onClick: (q) => h(z)
          }, "remove", 8, Kv)) : ge("", !0)
        ])
      ]))), 128)),
      r.canAdd ? (I(), W("button", {
        key: 0,
        class: "cursor-pointer text-sm btn-green py-1 px-2",
        onClick: B[2] || (B[2] = Ve((V) => b(null), ["prevent"]))
      }, "Add " + Ce(r.placeholder), 1)) : ge("", !0)
    ]));
  }
}, Yv = {
  key: 0,
  role: "list",
  class: "divide-y divide-gray-200 rounded-md bg-white"
}, Xv = ["href"], Zv = /* @__PURE__ */ Y("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ Y("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
  })
], -1), Jv = [
  Zv
], Qv = ["onClick"], e0 = /* @__PURE__ */ Y("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ Y("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1), t0 = [
  e0
], n0 = ["href"], r0 = {
  __name: "AttachmentsList",
  props: {
    attachments: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: ["remove"],
  setup(r, { emit: u }) {
    return (i, c) => r.attachments.length ? (I(), W("ul", Yv, [
      (I(!0), W($t, null, Wt(r.attachments, (g) => (I(), W("li", {
        key: g.id,
        class: "p-2 flex items-center rounded-md"
      }, [
        Y("a", {
          href: g.url,
          target: "_blank",
          class: "text-blue-500 rounded-full hover:bg-blue-200 p-1"
        }, Jv, 8, Xv),
        Y("button", {
          onClick: (v) => u("remove", g),
          type: "button",
          class: "ml-2 text-red-500 rounded-full hover:bg-red-200 p-1"
        }, t0, 8, Qv),
        Y("a", {
          href: g.url,
          target: "_blank",
          class: "mx-2 hover:text-blue-500"
        }, Ce(g.file_name), 9, n0)
      ]))), 128))
    ])) : ge("", !0);
  }
};
var Yl = {}, i0 = {
  get exports() {
    return Yl;
  },
  set exports(r) {
    Yl = r;
  }
};
const l0 = /* @__PURE__ */ Nv(tv);
/*!
 Name: vue-upload-component 
Component URI: https://github.com/lian-yue/vue-upload-component#readme 
Version: 3.1.5 
Author: LianYue 
License: Apache-2.0 
Description: Vue.js file upload component, Multi-file upload, Upload directory, Drag upload, Drag the directory, Upload multiple files at the same time, html4 (IE 9), `PUT` method, Customize the filter 
 */
(function(r, u) {
  (function(i, c) {
    r.exports = c(l0);
  })(Jn, function(i) {
    function c(S) {
      return b(S) || h(S) || v(S) || g();
    }
    function g() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function v(S, f) {
      if (S) {
        if (typeof S == "string")
          return A(S, f);
        var d = Object.prototype.toString.call(S).slice(8, -1);
        if (d === "Object" && S.constructor && (d = S.constructor.name), d === "Map" || d === "Set")
          return Array.from(S);
        if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))
          return A(S, f);
      }
    }
    function h(S) {
      if (typeof Symbol < "u" && S[Symbol.iterator] != null || S["@@iterator"] != null)
        return Array.from(S);
    }
    function b(S) {
      if (Array.isArray(S))
        return A(S);
    }
    function A(S, f) {
      (f == null || f > S.length) && (f = S.length);
      for (var d = 0, m = new Array(f); d < f; d++)
        m[d] = S[d];
      return m;
    }
    function _(S, f) {
      var d = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(S);
        f && (m = m.filter(function(E) {
          return Object.getOwnPropertyDescriptor(S, E).enumerable;
        })), d.push.apply(d, m);
      }
      return d;
    }
    function T(S) {
      for (var f = 1; f < arguments.length; f++) {
        var d = arguments[f] != null ? arguments[f] : {};
        f % 2 ? _(Object(d), !0).forEach(function(m) {
          B(S, m, d[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(d)) : _(Object(d)).forEach(function(m) {
          Object.defineProperty(S, m, Object.getOwnPropertyDescriptor(d, m));
        });
      }
      return S;
    }
    function B(S, f, d) {
      return f in S ? Object.defineProperty(S, f, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : S[f] = d, S;
    }
    function V(S) {
      return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
      }, V(S);
    }
    function z(S, f) {
      var d = Object.keys(S);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(S);
        f && (m = m.filter(function(E) {
          return Object.getOwnPropertyDescriptor(S, E).enumerable;
        })), d.push.apply(d, m);
      }
      return d;
    }
    function q(S) {
      for (var f = 1; f < arguments.length; f++) {
        var d = arguments[f] != null ? arguments[f] : {};
        f % 2 ? z(Object(d), !0).forEach(function(m) {
          Ee(S, m, d[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(d)) : z(Object(d)).forEach(function(m) {
          Object.defineProperty(S, m, Object.getOwnPropertyDescriptor(d, m));
        });
      }
      return S;
    }
    function Ie(S, f) {
      if (!(S instanceof f))
        throw new TypeError("Cannot call a class as a function");
    }
    function ye(S, f) {
      for (var d = 0; d < f.length; d++) {
        var m = f[d];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(S, m.key, m);
      }
    }
    function Ue(S, f, d) {
      return f && ye(S.prototype, f), d && ye(S, d), Object.defineProperty(S, "prototype", {
        writable: !1
      }), S;
    }
    function Ee(S, f, d) {
      return f in S ? Object.defineProperty(S, f, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : S[f] = d, S;
    }
    var fe = function(f) {
      var d = new XMLHttpRequest();
      return d.open(f.method || "GET", f.url), d.responseType = "json", f.headers && Object.keys(f.headers).forEach(function(m) {
        d.setRequestHeader(m, f.headers[m]);
      }), d;
    }, U = function(f, d) {
      return new Promise(function(m, E) {
        f.onload = function() {
          if (f.status >= 200 && f.status < 300) {
            var C;
            try {
              C = JSON.parse(f.response);
            } catch {
              C = f.response;
            }
            m(C);
          } else
            E(f.response);
        }, f.onerror = function() {
          return E(f.response);
        }, f.send(JSON.stringify(d));
      });
    }, xe = function(f, d) {
      var m = new FormData();
      for (var E in d)
        m.append(E, d[E]);
      return new Promise(function(C, P) {
        f.onload = function() {
          if (f.status >= 200 && f.status < 300) {
            var ae;
            try {
              ae = JSON.parse(f.response);
            } catch {
              ae = f.response;
            }
            C(ae);
          } else
            P(f.response);
        }, f.onerror = function() {
          return P(f.response);
        }, f.send(m);
      });
    };
    function F(S) {
      var f = fe(S);
      return U(f, S.body);
    }
    var N = /* @__PURE__ */ function() {
      function S(f, d) {
        Ie(this, S), this.file = f, this.options = d, this.chunks = [], this.sessionId = null, this.chunkSize = null, this.speedInterval = null;
      }
      return Ue(S, [{
        key: "maxRetries",
        get: function() {
          return parseInt(this.options.maxRetries, 10);
        }
        /**
         * Gets the max number of active chunks being uploaded at once from options
         */
      }, {
        key: "maxActiveChunks",
        get: function() {
          return parseInt(this.options.maxActive, 10);
        }
        /**
         * Gets the file type
         */
      }, {
        key: "fileType",
        get: function() {
          return this.file.type;
        }
        /**
         * Gets the file size
         */
      }, {
        key: "fileSize",
        get: function() {
          return this.file.size;
        }
        /**
         * Gets the file name
         */
      }, {
        key: "fileName",
        get: function() {
          return this.file.name;
        }
        /**
         * Gets action (url) to upload the file
         */
      }, {
        key: "action",
        get: function() {
          return this.options.action || null;
        }
        /**
         * Gets the body to be merged when sending the request in start phase
         */
      }, {
        key: "startBody",
        get: function() {
          return this.options.startBody || {};
        }
        /**
         * Gets the body to be merged when sending the request in upload phase
         */
      }, {
        key: "uploadBody",
        get: function() {
          return this.options.uploadBody || {};
        }
        /**
         * Gets the body to be merged when sending the request in finish phase
         */
      }, {
        key: "finishBody",
        get: function() {
          return this.options.finishBody || {};
        }
        /**
         * Gets the headers of the requests from options
         */
      }, {
        key: "headers",
        get: function() {
          return this.options.headers || {};
        }
        /**
         * Whether it's ready to upload files or not
         */
      }, {
        key: "readyToUpload",
        get: function() {
          return !!this.chunks;
        }
        /**
         * Gets the progress of the chunk upload
         * - Gets all the completed chunks
         * - Gets the progress of all the chunks that are being uploaded
         */
      }, {
        key: "progress",
        get: function() {
          var d = this, m = this.chunksUploaded.length / this.chunks.length * 100, E = this.chunksUploading.reduce(function(C, P) {
            return C + (P.progress | 0) / d.chunks.length;
          }, 0);
          return Math.min(m + E, 100);
        }
        /**
         * Gets all the chunks that are pending to be uploaded
         */
      }, {
        key: "chunksToUpload",
        get: function() {
          return this.chunks.filter(function(d) {
            return !d.active && !d.uploaded;
          });
        }
        /**
         * Whether there are chunks to upload or not
         */
      }, {
        key: "hasChunksToUpload",
        get: function() {
          return this.chunksToUpload.length > 0;
        }
        /**
         * Gets all the chunks that are uploading
         */
      }, {
        key: "chunksUploading",
        get: function() {
          return this.chunks.filter(function(d) {
            return !!d.xhr && !!d.active;
          });
        }
        /**
         * Gets all the chunks that have finished uploading
         */
      }, {
        key: "chunksUploaded",
        get: function() {
          return this.chunks.filter(function(d) {
            return !!d.uploaded;
          });
        }
        /**
         * Creates all the chunks in the initial state
         */
      }, {
        key: "createChunks",
        value: function() {
          this.chunks = [];
          for (var d = 0, m = this.chunkSize; d < this.fileSize; )
            this.chunks.push({
              blob: this.file.file.slice(d, m),
              startOffset: d,
              active: !1,
              retries: this.maxRetries
            }), d = m, m = d + this.chunkSize;
        }
        /**
         * Updates the progress of the file with the handler's progress
         */
      }, {
        key: "updateFileProgress",
        value: function() {
          this.file.progress = this.progress;
        }
        /**
         * Paues the upload process
         * - Stops all active requests
         * - Sets the file not active
         */
      }, {
        key: "pause",
        value: function() {
          this.file.active = !1, this.stopChunks();
        }
        /**
         * Stops all the current chunks
         */
      }, {
        key: "stopChunks",
        value: function() {
          this.chunksUploading.forEach(function(d) {
            d.xhr.abort(), d.active = !1;
          }), this.stopSpeedCalc();
        }
        /**
         * Resumes the file upload
         * - Sets the file active
         * - Starts the following chunks
         */
      }, {
        key: "resume",
        value: function() {
          this.file.active = !0, this.startChunking();
        }
        /**
         * Starts the file upload
         *
         * @returns Promise
         * - resolve  The file was uploaded
         * - reject   The file upload failed
         */
      }, {
        key: "upload",
        value: function() {
          var d = this;
          return this.promise = new Promise(function(m, E) {
            d.resolve = m, d.reject = E;
          }), this.start(), this.promise;
        }
        /**
         * Start phase
         * Sends a request to the backend to initialise the chunks
         */
      }, {
        key: "start",
        value: function() {
          var d = this;
          F({
            method: "POST",
            headers: q(q({}, this.headers), {}, {
              "Content-Type": "application/json"
            }),
            url: this.action,
            body: Object.assign(this.startBody, {
              phase: "start",
              mime_type: this.fileType,
              size: this.fileSize,
              name: this.fileName
            })
          }).then(function(m) {
            if (m.status !== "success")
              return d.file.response = m, d.reject("server");
            d.sessionId = m.data.session_id, d.chunkSize = m.data.end_offset, d.createChunks(), d.startChunking();
          }).catch(function(m) {
            d.file.response = m, d.reject("server");
          });
        }
        /**
         * Starts to upload chunks
         */
      }, {
        key: "startChunking",
        value: function() {
          for (var d = 0; d < this.maxActiveChunks; d++)
            this.uploadNextChunk();
          this.startSpeedCalc();
        }
        /**
         * Uploads the next chunk
         * - Won't do anything if the process is paused
         * - Will start finish phase if there are no more chunks to upload
         */
      }, {
        key: "uploadNextChunk",
        value: function() {
          if (this.file.active) {
            if (this.hasChunksToUpload)
              return this.uploadChunk(this.chunksToUpload[0]);
            if (this.chunksUploading.length === 0)
              return this.finish();
          }
        }
        /**
         * Uploads a chunk
         * - Sends the chunk to the backend
         * - Sets the chunk as uploaded if everything went well
         * - Decreases the number of retries if anything went wrong
         * - Fails if there are no more retries
         *
         * @param {Object} chunk
         */
      }, {
        key: "uploadChunk",
        value: function(d) {
          var m = this;
          d.progress = 0, d.active = !0, this.updateFileProgress(), d.xhr = fe({
            method: "POST",
            headers: this.headers,
            url: this.action
          }), d.xhr.upload.addEventListener("progress", function(E) {
            E.lengthComputable && (d.progress = Math.round(E.loaded / E.total * 100));
          }, !1), xe(d.xhr, Object.assign(this.uploadBody, {
            phase: "upload",
            session_id: this.sessionId,
            start_offset: d.startOffset,
            chunk: d.blob
          })).then(function(E) {
            if (d.active = !1, E.status === "success")
              d.uploaded = !0;
            else if (d.retries-- <= 0)
              return m.stopChunks(), m.reject("upload");
            m.uploadNextChunk();
          }).catch(function() {
            if (d.active = !1, d.retries-- <= 0)
              return m.stopChunks(), m.reject("upload");
            m.uploadNextChunk();
          });
        }
        /**
         * Finish phase
         * Sends a request to the backend to finish the process
         */
      }, {
        key: "finish",
        value: function() {
          var d = this;
          this.updateFileProgress(), this.stopSpeedCalc(), F({
            method: "POST",
            headers: q(q({}, this.headers), {}, {
              "Content-Type": "application/json"
            }),
            url: this.action,
            body: Object.assign(this.finishBody, {
              phase: "finish",
              session_id: this.sessionId
            })
          }).then(function(m) {
            if (d.file.response = m, m.status !== "success")
              return d.reject("server");
            d.resolve(m);
          }).catch(function(m) {
            d.file.response = m, d.reject("server");
          });
        }
        /**
         * Sets an interval to calculate and
         * set upload speed every 3 seconds
         */
      }, {
        key: "startSpeedCalc",
        value: function() {
          var d = this;
          this.file.speed = 0;
          var m = 0;
          this.speedInterval || (this.speedInterval = window.setInterval(function() {
            var E = d.progress / 100 * d.fileSize;
            d.file.speed = E - m, m = E;
          }, 1e3));
        }
        /**
         * Removes the upload speed interval
         */
      }, {
        key: "stopSpeedCalc",
        value: function() {
          this.speedInterval && window.clearInterval(this.speedInterval), this.speedInterval = null, this.file.speed = 0;
        }
      }]), S;
    }(), G = {
      headers: {},
      action: "",
      minSize: 1048576,
      maxActive: 3,
      maxRetries: 5,
      handler: N
    }, le = i.defineComponent({
      props: {
        inputId: {
          type: String
        },
        name: {
          type: String,
          default: "file"
        },
        accept: {
          type: String
        },
        capture: {},
        disabled: {
          default: !1
        },
        multiple: {
          type: Boolean,
          default: !1
        },
        maximum: {
          type: Number
        },
        addIndex: {
          type: [Boolean, Number]
        },
        directory: {
          type: Boolean
        },
        createDirectory: {
          type: Boolean,
          default: !1
        },
        postAction: {
          type: String
        },
        putAction: {
          type: String
        },
        customAction: {
          type: Function
        },
        headers: {
          type: Object,
          default: function() {
            return {};
          }
        },
        data: {
          type: Object,
          default: function() {
            return {};
          }
        },
        timeout: {
          type: Number,
          default: 0
        },
        drop: {
          default: !1
        },
        dropDirectory: {
          type: Boolean,
          default: !0
        },
        size: {
          type: Number,
          default: 0
        },
        extensions: {
          type: [RegExp, String, Array],
          default: function() {
            return [];
          }
        },
        modelValue: {
          type: Array,
          default: function() {
            return [];
          }
        },
        thread: {
          type: Number,
          default: 1
        },
        // Chunk upload enabled
        chunkEnabled: {
          type: Boolean,
          default: !1
        },
        // Chunk upload properties
        chunk: {
          type: Object,
          default: function() {
            return G;
          }
        }
      },
      emits: ["update:modelValue", "input-filter", "input-file"],
      data: function() {
        return {
          files: this.modelValue,
          features: {
            html5: !0,
            directory: !1,
            drop: !1
          },
          active: !1,
          dropActive: !1,
          uploading: 0,
          destroy: !1,
          maps: {},
          dropElement: null,
          dropTimeout: null,
          reload: !1
        };
      },
      /**
       * mounted
       * @return {[type]} [description]
       */
      mounted: function() {
        var f = this, d = document.createElement("input");
        if (d.type = "file", d.multiple = !0, window.FormData && d.files ? ((typeof d.webkitdirectory == "boolean" || typeof d.directory == "boolean") && (this.features.directory = !0), this.features.html5 && typeof d.ondrop < "u" && (this.features.drop = !0)) : this.features.html5 = !1, this.maps = {}, this.files)
          for (var m = 0; m < this.files.length; m++) {
            var E = this.files[m];
            this.maps[E.id] = E;
          }
        this.$nextTick(function() {
          f.$parent ? (f.$parent.$forceUpdate(), f.$parent.$nextTick(function() {
            f.watchDrop(f.drop);
          })) : f.watchDrop(f.drop);
        });
      },
      /**
       * beforeUnmount
       * @return {[type]} [description]
       */
      beforeUnmount: function() {
        this.destroy = !0, this.active = !1, this.watchDrop(!1), this.watchActive(!1);
      },
      computed: {
        /**
         * uploading 正在上传的线程
         * @return {[type]} [description]
         */
        /**
         * uploaded 文件列表是否全部已上传
         * @return {[type]} [description]
         */
        uploaded: function() {
          for (var f, d = 0; d < this.files.length; d++)
            if (f = this.files[d], f.fileObject && !f.error && !f.success)
              return !1;
          return !0;
        },
        chunkOptions: function() {
          return Object.assign(G, this.chunk);
        },
        className: function() {
          return ["file-uploads", this.features.html5 ? "file-uploads-html5" : "file-uploads-html4", this.features.directory && this.directory ? "file-uploads-directory" : void 0, this.features.drop && this.drop ? "file-uploads-drop" : void 0, this.disabled ? "file-uploads-disabled" : void 0];
        },
        forId: function() {
          return this.inputId || this.name;
        },
        iMaximum: function() {
          return this.maximum === void 0 ? this.multiple ? 0 : 1 : this.maximum;
        },
        iExtensions: function() {
          if (this.extensions) {
            if (this.extensions instanceof RegExp)
              return this.extensions;
            if (this.extensions.length) {
              var f = [];
              return typeof this.extensions == "string" ? f = this.extensions.split(",") : f = this.extensions, f = f.map(function(d) {
                return d.trim();
              }).filter(function(d) {
                return d;
              }), new RegExp("\\.(" + f.join("|").replace(/\./g, "\\.") + ")$", "i");
            }
          }
        },
        iDirectory: function() {
          if (this.directory && this.features.directory)
            return !0;
        }
      },
      watch: {
        active: function(f) {
          this.watchActive(f);
        },
        dropActive: function(f) {
          this.watchDropActive(f), this.$parent && this.$parent.$forceUpdate();
        },
        drop: function(f) {
          this.watchDrop(f);
        },
        modelValue: function(f) {
          if (this.files !== f) {
            this.files = f;
            var d = this.maps;
            this.maps = {};
            for (var m = 0; m < this.files.length; m++) {
              var E = this.files[m];
              this.maps[E.id] = E;
            }
            for (var C in this.maps) {
              var P = this.maps[C], ae = d[C];
              P !== ae && this.emitFile(P, ae);
            }
            for (var me in d)
              this.maps[me] || this.emitFile(void 0, d[me]);
          }
        }
      },
      methods: {
        newId: function() {
          return Math.random().toString(36).substr(2);
        },
        // 清空
        clear: function() {
          if (this.files.length) {
            var f = this.files;
            this.files = [], this.maps = {}, this.emitInput();
            for (var d = 0; d < f.length; d++)
              this.emitFile(void 0, f[d]);
          }
          return !0;
        },
        // 选择
        get: function(f) {
          return f ? V(f) === "object" ? this.maps[f.id || ""] || !1 : this.maps[f] || !1 : !1;
        },
        // 添加
        add: function(f, d) {
          var m;
          f instanceof Array ? m = f : m = [f], d === void 0 && (d = this.addIndex);
          for (var E = [], C = 0; C < m.length; C++) {
            var P = m[C];
            this.features.html5 && P instanceof Blob && (P = {
              id: "",
              file: P,
              size: P.size,
              // @ts-ignore
              name: P.webkitRelativePath || P.relativePath || P.name || "unknown",
              type: P.type
            }), P = P;
            var ae = !1;
            if (P.fileObject === !1 || (P.fileObject || typeof Element < "u" && P.el instanceof HTMLInputElement || typeof Blob < "u" && P.file instanceof Blob) && (ae = !0), ae && (P = T(T({
              fileObject: !0,
              size: -1,
              name: "Filename",
              type: "",
              active: !1,
              error: "",
              success: !1,
              putAction: this.putAction,
              postAction: this.postAction,
              timeout: this.timeout
            }, P), {}, {
              response: {},
              progress: "0.00",
              speed: 0
              // 只读
              // file: undefined,
              // xhr: undefined,
              // el: undefined,
              // iframe: undefined,
            }), P.data = T(T({}, this.data), P.data ? P.data : {}), P.headers = T(T({}, this.headers), P.headers ? P.headers : {})), P.id || (P.id = this.newId()), !this.emitFilter(P, void 0) && (this.iMaximum > 1 && E.length + this.files.length >= this.iMaximum || (E.push(P), this.iMaximum === 1)))
              break;
          }
          if (E.length) {
            this.iMaximum === 1 && this.clear();
            var me;
            if (d === !0 || d === 0)
              me = E.concat(this.files);
            else if (d) {
              var be;
              me = this.files.concat([]), (be = me).splice.apply(be, [d, 0].concat(c(E)));
            } else
              me = this.files.concat(E);
            this.files = me;
            var Q = 0;
            d === !0 || d === 0 ? Q = 0 : d ? d >= 0 ? d + E.length > this.files.length ? Q = this.files.length - E.length : Q = d : (Q = this.files.length - E.length + d, Q < 0 && (Q = 0)) : Q = this.files.length - E.length, E = this.files.slice(Q, Q + E.length);
            for (var ke = 0; ke < E.length; ke++) {
              var ue = E[ke];
              this.maps[ue.id] = ue;
            }
            this.emitInput();
            for (var he = 0; he < E.length; he++)
              this.emitFile(E[he], void 0);
            return f instanceof Array ? E : E[0];
          }
        },
        // 添加表单文件
        addInputFile: function(f) {
          var d = this, m = [];
          this.iMaximum;
          var E = f.webkitEntries || f.entries || void 0;
          if (E != null && E.length)
            return this.getFileSystemEntry(E).then(function(me) {
              return d.add(me);
            });
          if (f.files)
            for (var C = 0; C < f.files.length; C++) {
              var P = f.files[C];
              m.push({
                id: "",
                size: P.size,
                // @ts-ignore
                name: P.webkitRelativePath || P.relativePath || P.name,
                type: P.type,
                file: P
              });
            }
          else {
            var ae = f.value.replace(/\\/g, "/").split("/");
            (!ae || !ae.length) && (ae = [f.value]), delete f.__vuex__, m.push({
              id: "",
              name: ae[ae.length - 1],
              el: f
            });
          }
          return Promise.resolve(this.add(m));
        },
        // 添加 DataTransfer
        addDataTransfer: function(f) {
          var d, m = this;
          if (f != null && (d = f.items) !== null && d !== void 0 && d.length) {
            for (var E = [], C = 0; C < f.items.length; C++) {
              var P = f.items[C], ae = void 0;
              P.getAsEntry ? ae = P.getAsEntry() || P.getAsFile() : P.webkitGetAsEntry ? ae = P.webkitGetAsEntry() || P.getAsFile() : ae = P.getAsFile(), ae && E.push(ae);
            }
            return this.getFileSystemEntry(E).then(function(ke) {
              return m.add(ke);
            });
          }
          var me = this.iMaximum, be = [];
          if (f.files.length) {
            for (var Q = 0; Q < f.files.length && (be.push(f.files[Q]), !(me > 0 && be.length >= me)); Q++)
              ;
            return Promise.resolve(this.add(be));
          }
          return Promise.resolve([]);
        },
        // 获得 entrys    
        getFileSystemEntry: function(f) {
          var d = this, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          return new Promise(function(E) {
            var C = d.iMaximum;
            if (!f) {
              E([]);
              return;
            }
            if (f instanceof Array) {
              var P = [], ae = function he(Ge) {
                var dt = f[Ge];
                if (!dt || C > 0 && P.length >= C)
                  return E(P);
                d.getFileSystemEntry(dt, m).then(function(He) {
                  P.push.apply(P, c(He)), he(Ge + 1);
                });
              };
              ae(0);
              return;
            }
            if (f instanceof Blob) {
              E([{
                id: "",
                size: f.size,
                // @ts-ignore
                name: m + f.name,
                type: f.type,
                file: f
              }]);
              return;
            }
            if (f.isFile) {
              var me = f;
              me.file(function(he) {
                E([{
                  id: "",
                  size: he.size,
                  name: m + he.name,
                  type: he.type,
                  file: he
                }]);
              });
              return;
            }
            if (f.isDirectory && d.dropDirectory) {
              var be = f, Q = [];
              d.createDirectory && Q.push({
                id: "",
                name: m + be.name,
                size: 0,
                type: "text/directory",
                file: new File([], m + be.name, {
                  type: "text/directory"
                })
              });
              var ke = be.createReader(), ue = function he() {
                ke.readEntries(function(Ge) {
                  var dt = function He(je) {
                    if (!Ge[je] && je === 0 || C > 0 && Q.length >= C)
                      return E(Q);
                    if (!Ge[je])
                      return he();
                    d.getFileSystemEntry(Ge[je], m + be.name + "/").then(function(an) {
                      Q.push.apply(Q, c(an)), He(je + 1);
                    });
                  };
                  dt(0);
                });
              };
              ue();
              return;
            }
            E([]);
          });
        },
        // 替换
        replace: function(f, d) {
          var m = this.get(f), E = this.get(d);
          if (!m || !E || m === E)
            return !1;
          var C = this.files.concat([]), P = C.indexOf(m), ae = C.indexOf(E);
          return P === -1 || ae === -1 ? !1 : (C[P] = E, C[ae] = m, this.files = C, this.emitInput(), !0);
        },
        // 移除
        remove: function(f) {
          var d = this.get(f);
          if (d) {
            if (this.emitFilter(void 0, d))
              return !1;
            var m = this.files.concat([]), E = m.indexOf(d);
            if (E === -1)
              return console.error("remove", d), !1;
            m.splice(E, 1), this.files = m, delete this.maps[d.id], this.emitInput(), this.emitFile(void 0, d);
          }
          return d;
        },
        // 更新
        update: function(f, d) {
          var m = this.get(f);
          if (m) {
            var E = T(T({}, m), d);
            if (m.fileObject && m.active && !E.active && !E.error && !E.success && (E.error = "abort"), this.emitFilter(E, m))
              return !1;
            var C = this.files.concat([]), P = C.indexOf(m);
            return P === -1 ? (console.error("update", m), !1) : (C.splice(P, 1, E), this.files = C, E = this.files[P], delete this.maps[m.id], this.maps[E.id] = E, this.emitInput(), this.emitFile(E, m), E);
          }
          return !1;
        },
        // 预处理 事件 过滤器
        emitFilter: function(f, d) {
          var m = !1;
          return this.$emit("input-filter", f, d, function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
            return m = E, m;
          }), m;
        },
        // 处理后 事件 分发
        emitFile: function(f, d) {
          var m, E = this;
          this.$emit("input-file", f, d), (m = f) !== null && m !== void 0 && m.fileObject && f.active && (!d || !d.active) ? (this.uploading++, this.$nextTick(function() {
            setTimeout(function() {
              f && E.upload(f).then(function() {
                var C;
                f && (f = E.get(f) || void 0), (C = f) !== null && C !== void 0 && C.fileObject && E.update(f, {
                  active: !1,
                  success: !f.error
                });
              }).catch(function(C) {
                f && E.update(f, {
                  active: !1,
                  success: !1,
                  error: C.code || C.error || C.message || C
                });
              });
            }, Math.ceil(Math.random() * 50 + 50));
          })) : (!f || !f.fileObject || !f.active) && d && d.fileObject && d.active && this.uploading--, this.active && (Boolean(f) !== Boolean(d) || f.active !== d.active) && this.watchActive(!0);
        },
        emitInput: function() {
          this.$emit("update:modelValue", this.files);
        },
        // 上传
        upload: function(f) {
          var d = this.get(f);
          if (!d)
            return Promise.reject(new Error("not_exists"));
          if (!d.fileObject)
            return Promise.reject(new Error("file_object"));
          if (d.error)
            return d.error instanceof Error ? Promise.reject(d.error) : Promise.reject(new Error(d.error));
          if (d.success)
            return Promise.resolve(d);
          if (d.name && this.iExtensions && d.type !== "text/directory" && d.name.search(this.iExtensions) === -1)
            return Promise.reject(new Error("extension"));
          if (this.size > 0 && d.size !== void 0 && d.size >= 0 && d.size > this.size && d.type !== "text/directory")
            return Promise.reject(new Error("size"));
          if (this.customAction)
            return this.customAction(d, this);
          if (this.features.html5) {
            if (this.shouldUseChunkUpload(d))
              return this.uploadChunk(d);
            if (d.putAction)
              return this.uploadPut(d);
            if (d.postAction)
              return this.uploadHtml5(d);
          }
          return d.postAction ? this.uploadHtml4(d) : Promise.reject(new Error("No action configured"));
        },
        /**
         * Whether this file should be uploaded using chunk upload or not
         *
         * @param Object file
         */
        shouldUseChunkUpload: function(f) {
          return this.chunkEnabled && !!this.chunkOptions.handler && f.size && f.size > this.chunkOptions.minSize;
        },
        /**
         * Upload a file using Chunk method
         *
         * @param File file
         */
        uploadChunk: function(f) {
          var d = this.chunkOptions.handler;
          return f.chunk = new d(f, this.chunkOptions), f.chunk.upload().then(function(m) {
            return f;
          });
        },
        uploadPut: function(f) {
          var d = [], m;
          for (var E in f.data)
            m = f.data[E], m != null && d.push(encodeURIComponent(E) + "=" + encodeURIComponent(m));
          var C = f.putAction || "", P = d.length ? (C.indexOf("?") === -1 ? "?" : "&") + d.join("&") : "", ae = new XMLHttpRequest();
          return ae.open("PUT", C + P), this.uploadXhr(ae, f, f.file);
        },
        uploadHtml5: function(f) {
          var d = new window.FormData(), m;
          for (var E in f.data)
            m = f.data[E], m && V(m) === "object" && typeof m.toString != "function" ? m instanceof File ? d.append(E, m, m.name) : d.append(E, JSON.stringify(m)) : m != null && d.append(E, m);
          d.append(this.name, f.file, f.name || f.file.name || f.file.filename);
          var C = new XMLHttpRequest();
          return C.open("POST", f.postAction || ""), this.uploadXhr(C, f, d);
        },
        uploadXhr: function(f, d, m) {
          var E = this, C = d, P = 0, ae = 0;
          f.upload.onprogress = function(be) {
            if (C && (C = E.get(C), !(!be.lengthComputable || !C || !C.fileObject || !C.active))) {
              var Q = Math.round(Date.now() / 1e3);
              Q !== P && (P = Q, C = E.update(C, {
                progress: (be.loaded / be.total * 100).toFixed(2),
                speed: be.loaded - ae
              }), ae = be.loaded);
            }
          };
          var me = window.setInterval(function() {
            if (C && (C = E.get(C))) {
              var be;
              if ((be = C) !== null && be !== void 0 && be.fileObject && !C.success && !C.error && C.active)
                return;
            }
            me && (clearInterval(me), me = void 0);
            try {
              f.abort(), f.timeout = 1;
            } catch {
            }
          }, 100);
          return new Promise(function(be, Q) {
            if (!C) {
              Q(new Error("not_exists"));
              return;
            }
            var ke, ue = function(dt) {
              if (!ke) {
                if (ke = !0, me && (clearInterval(me), me = void 0), !C)
                  return Q(new Error("not_exists"));
                if (C = E.get(C), !C)
                  return Q(new Error("not_exists"));
                if (!C.fileObject)
                  return Q(new Error("file_object"));
                if (C.error)
                  return C.error instanceof Error ? Q(C.error) : Q(new Error(C.error));
                if (!C.active)
                  return Q(new Error("abort"));
                if (C.success)
                  return be(C);
                var He = {};
                switch (dt.type) {
                  case "timeout":
                  case "abort":
                    He.error = dt.type;
                    break;
                  case "error":
                    f.status ? f.status >= 500 ? He.error = "server" : f.status >= 400 && (He.error = "denied") : He.error = "network";
                    break;
                  default:
                    f.status >= 500 ? He.error = "server" : f.status >= 400 ? He.error = "denied" : He.progress = "100.00";
                }
                if (f.responseText) {
                  var je = f.getResponseHeader("Content-Type");
                  je && je.indexOf("/json") !== -1 ? He.response = JSON.parse(f.responseText) : He.response = f.responseText;
                }
                return C = E.update(C, He), C ? C.error ? C.error instanceof Error ? Q(C.error) : Q(new Error(C.error)) : be(C) : Q(new Error("abort"));
              }
            };
            f.onload = ue, f.onerror = ue, f.onabort = ue, f.ontimeout = ue, C.timeout && (f.timeout = C.timeout);
            for (var he in C.headers)
              f.setRequestHeader(he, C.headers[he]);
            C = E.update(C, {
              xhr: f
            }), C && f.send(m);
          });
        },
        uploadHtml4: function(f) {
          var d = this, m = f;
          if (!m)
            return Promise.reject(new Error("not_exists"));
          var E = function(ue) {
            ue.keyCode === 27 && ue.preventDefault();
          }, C = document.createElement("iframe");
          C.id = "upload-iframe-" + m.id, C.name = "upload-iframe-" + m.id, C.src = "about:blank", C.setAttribute("style", "width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;");
          var P = document.createElement("form");
          P.setAttribute("action", m.postAction || ""), P.name = "upload-form-" + m.id, P.setAttribute("method", "POST"), P.setAttribute("target", "upload-iframe-" + m.id), P.setAttribute("enctype", "multipart/form-data");
          for (var ae in m.data) {
            var me = m.data[ae];
            if (me && V(me) === "object" && typeof me.toString != "function" && (me = JSON.stringify(me)), me != null) {
              var be = document.createElement("input");
              be.type = "hidden", be.name = ae, be.value = me, P.appendChild(be);
            }
          }
          P.appendChild(m.el), document.body.appendChild(C).appendChild(P);
          var Q = function() {
            var ue, he;
            try {
              C.contentWindow && (he = C.contentWindow.document);
            } catch {
            }
            if (!he)
              try {
                he = C.contentDocument ? C.contentDocument : C.document;
              } catch {
                he = C.document;
              }
            return (ue = he) !== null && ue !== void 0 && ue.body ? he.body.innerHTML : null;
          };
          return new Promise(function(ke, ue) {
            setTimeout(function() {
              if (!m) {
                ue(new Error("not_exists"));
                return;
              }
              if (m = d.update(m, {
                iframe: C
              }), !m)
                return ue(new Error("not_exists"));
              var he = window.setInterval(function() {
                m && (m = d.get(m)) && m.fileObject && !m.success && !m.error && m.active || (he && (clearInterval(he), he = void 0), C.onabort({
                  type: m ? "abort" : "not_exists"
                }));
              }, 100), Ge, dt = function(je) {
                var an;
                if (!Ge) {
                  if (Ge = !0, he && (clearInterval(he), he = void 0), document.body.removeEventListener("keydown", E), !m)
                    return ue(new Error("not_exists"));
                  if (m = d.get(m), !m)
                    return ue(new Error("not_exists"));
                  if (!m.fileObject)
                    return ue(new Error("file_object"));
                  if (m.error)
                    return m.error instanceof Error ? ue(m.error) : ue(new Error(m.error));
                  if (!m.active)
                    return ue(new Error("abort"));
                  if (m.success)
                    return ke(m);
                  var Re = Q(), tt = {};
                  if (typeof je == "string")
                    return ue(new Error(je));
                  switch (je.type) {
                    case "abort":
                      tt.error = "abort";
                      break;
                    case "error":
                      m.error ? tt.error = m.error : Re === null ? tt.error = "network" : tt.error = "denied";
                      break;
                    default:
                      m.error ? tt.error = m.error : Re === null ? tt.error = "network" : tt.progress = "100.00";
                  }
                  if (Re !== null) {
                    if (Re && Re.substr(0, 1) === "{" && Re.substr(Re.length - 1, 1) === "}")
                      try {
                        Re = JSON.parse(Re);
                      } catch {
                      }
                    tt.response = Re;
                  }
                  return m = d.update(m, tt), m ? (an = m) !== null && an !== void 0 && an.error ? m.error instanceof Error ? ue(m.error) : ue(new Error(m.error)) : ke(m) : ue(new Error("not_exists"));
                }
              };
              C.onload = dt, C.onerror = dt, C.onabort = dt, document.body.addEventListener("keydown", E), P.submit();
            }, 50);
          }).then(function(ke) {
            var ue;
            return C == null || (ue = C.parentNode) === null || ue === void 0 || ue.removeChild(C), ke;
          }).catch(function(ke) {
            var ue;
            return C == null || (ue = C.parentNode) === null || ue === void 0 || ue.removeChild(C), ke;
          });
        },
        watchActive: function(f) {
          for (var d, m = 0; d = this.files[m]; )
            if (m++, d.fileObject)
              if (f && !this.destroy) {
                if (this.uploading >= this.thread || this.uploading && !this.features.html5)
                  break;
                !d.active && !d.error && !d.success && this.update(d, {
                  active: !0
                });
              } else
                d.active && this.update(d, {
                  active: !1
                });
          this.uploading === 0 && (this.active = !1);
        },
        watchDrop: function(f) {
          var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (this.features.drop && f !== d) {
            if (this.dropElement)
              try {
                document.removeEventListener("dragenter", this.onDocumentDragenter, !1), document.removeEventListener("dragleave", this.onDocumentDragleave, !1), document.removeEventListener("dragover", this.onDocumentDragover, !1), document.removeEventListener("drop", this.onDocumentDrop, !1), this.dropElement.removeEventListener("dragover", this.onDragover, !1), this.dropElement.removeEventListener("drop", this.onDrop, !1);
              } catch {
              }
            var m = null;
            if (f)
              if (typeof f == "string")
                m = document.querySelector(f) || this.$root.$el.querySelector(f);
              else if (f === !0) {
                var E;
                if (m = this.$parent.$el, !m || ((E = m) === null || E === void 0 ? void 0 : E.nodeType) === 8) {
                  var C;
                  m = this.$root.$el, (!m || ((C = m) === null || C === void 0 ? void 0 : C.nodeType) === 8) && (m = document.body);
                }
              } else
                m = f;
            this.dropElement = m, this.dropElement && (document.addEventListener("dragenter", this.onDocumentDragenter, !1), document.addEventListener("dragleave", this.onDocumentDragleave, !1), document.addEventListener("dragover", this.onDocumentDragover, !1), document.addEventListener("drop", this.onDocumentDrop, !1), this.dropElement.addEventListener("dragover", this.onDragover, !1), this.dropElement.addEventListener("drop", this.onDrop, !1));
          }
        },
        watchDropActive: function(f, d) {
          f !== d && (this.dropTimeout && (clearTimeout(this.dropTimeout), this.dropTimeout = null), f && (this.dropTimeout = setTimeout(this.onDocumentDrop, 1e3)));
        },
        onDocumentDragenter: function(f) {
          var d, m;
          if (!this.dropActive && f.dataTransfer) {
            var E = f.dataTransfer;
            E != null && (d = E.files) !== null && d !== void 0 && d.length ? this.dropActive = !0 : E.types ? E.types.indexOf && E.types.indexOf("Files") !== -1 ? this.dropActive = !0 : (m = E.types) !== null && m !== void 0 && m.contains && E.types.contains("Files") && (this.dropActive = !0) : this.dropActive = !0, this.dropActive && this.watchDropActive(!0);
          }
        },
        onDocumentDragleave: function(f) {
          this.dropActive && (f.target === f.explicitOriginalTarget || !f.fromElement && (f.clientX <= 0 || f.clientY <= 0 || f.clientX >= window.innerWidth || f.clientY >= window.innerHeight)) && (this.dropActive = !1, this.watchDropActive(!1));
        },
        onDocumentDragover: function() {
          this.watchDropActive(!0);
        },
        onDocumentDrop: function() {
          this.dropActive = !1, this.watchDropActive(!1);
        },
        onDragover: function(f) {
          f.preventDefault();
        },
        onDrop: function(f) {
          f.preventDefault(), f.dataTransfer && this.addDataTransfer(f.dataTransfer);
        },
        inputOnChange: async function(f) {
          var d = this;
          if (!(f.target instanceof HTMLInputElement))
            return Promise.reject(new Error("not HTMLInputElement"));
          f.target;
          var m = function(C) {
            return d.reload = !0, d.$nextTick(function() {
              d.reload = !1;
            }), C;
          };
          return this.addInputFile(f.target).then(m).catch(m);
        }
      }
    }), de = ["for"], $e = ["name", "id", "accept", "capture", "disabled", "webkitdirectory", "allowdirs", "directory", "multiple"];
    function Vt(S, f, d, m, E, C) {
      return i.openBlock(), i.createElementBlock("span", {
        class: i.normalizeClass(S.className)
      }, [i.renderSlot(S.$slots, "default"), i.createElementVNode("label", {
        for: S.forId
      }, null, 8, de), S.reload ? i.createCommentVNode("", !0) : (i.openBlock(), i.createElementBlock("input", {
        key: 0,
        ref: "input",
        type: "file",
        name: S.name,
        id: S.forId,
        accept: S.accept,
        capture: S.capture,
        disabled: S.disabled,
        webkitdirectory: S.iDirectory,
        allowdirs: S.iDirectory,
        directory: S.iDirectory,
        multiple: S.multiple && S.features.html5,
        onChange: f[0] || (f[0] = function() {
          return S.inputOnChange && S.inputOnChange.apply(S, arguments);
        })
      }, null, 40, $e))], 2);
    }
    function Ft(S, f) {
      f === void 0 && (f = {});
      var d = f.insertAt;
      if (!(!S || typeof document > "u")) {
        var m = document.head || document.getElementsByTagName("head")[0], E = document.createElement("style");
        E.type = "text/css", d === "top" && m.firstChild ? m.insertBefore(E, m.firstChild) : m.appendChild(E), E.styleSheet ? E.styleSheet.cssText = S : E.appendChild(document.createTextNode(S));
      }
    }
    var ln = `
.file-uploads {
  overflow: hidden;
  position: relative;
  text-align: center;
  display: inline-block;
}
.file-uploads.file-uploads-html4 input,
.file-uploads.file-uploads-html5 label {
  /* background fix ie  click */
  background: #fff;
  opacity: 0;
  font-size: 20em;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.file-uploads.file-uploads-html5 input,
.file-uploads.file-uploads-html4 label {
  /* background fix ie  click */
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  position: fixed;
  width: 1px;
  height: 1px;
  z-index: -1;
  opacity: 0;
}
`;
    return Ft(ln), le.render = Vt, le;
  });
})(i0);
const a0 = Yl;
const u0 = {
  key: 0,
  class: "image-preview-container bg-gray-100 relative border rounded mx-auto shadow"
}, o0 = {
  key: 0,
  class: "flex flex-col justify-center items-center"
}, s0 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-1/2 inline-block"
}, f0 = /* @__PURE__ */ Y("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
}, null, -1), d0 = [
  f0
], c0 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-1/2 inline-block"
}, h0 = /* @__PURE__ */ Y("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
}, null, -1), p0 = [
  h0
], m0 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-1/2 inline-block"
}, g0 = /* @__PURE__ */ Y("path", {
  "stroke-linecap": "round",
  d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
}, null, -1), v0 = [
  g0
], y0 = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-1/2 inline-block"
}, b0 = /* @__PURE__ */ Y("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
}, null, -1), w0 = [
  b0
], x0 = {
  key: 4,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-1/2 inline-block text-gray-400"
}, S0 = /* @__PURE__ */ Y("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), A0 = [
  S0
], O0 = {
  key: 5,
  class: "text-sm"
}, E0 = ["href"], _0 = { key: 1 }, C0 = /* @__PURE__ */ Y("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ Y("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1), L0 = [
  C0
], T0 = { class: "space-y-1 text-center" }, $0 = /* @__PURE__ */ Y("path", {
  d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), k0 = [
  $0
], D0 = { class: "flex text-sm text-gray-600 justify-center" }, P0 = /* @__PURE__ */ Y("span", null, "Upload a file", -1), I0 = /* @__PURE__ */ Y("div", { class: "pl-1" }, "or drag and drop", -1), R0 = { class: "text-xs text-gray-500" }, B0 = {
  key: 0,
  role: "list",
  class: "divide-y divide-gray-200"
}, V0 = ["onClick"], F0 = /* @__PURE__ */ Y("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ Y("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), M0 = [
  F0
], N0 = { class: "mx-2" }, Ho = {
  __name: "FileUpload",
  props: {
    modelValue: null,
    id: {
      default() {
        return Math.random().toString(36).slice(2);
      }
    },
    placeholder: {
      type: String,
      default: "/images/placeholder-image.png"
    },
    acceptableTypes: {
      type: Array,
      default() {
        return ["image"];
      }
    },
    maxSize: {
      type: [Number, String],
      default: "10MB"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: u }) {
    const i = r, c = ie(i.placeholder), g = ie(null), v = () => {
      vi(() => {
        if (h.value && Ue(h.value, "image"))
          if (i.modelValue.file) {
            let F = new FileReader();
            F.onload = (N) => {
              c.value = N.target.result;
            }, F.readAsDataURL(i.modelValue.file);
          } else
            yn.isString(i.modelValue) && (c.value = i.modelValue);
        else
          c.value = i.placeholder;
      });
    }, h = te(() => {
      if (!i.modelValue || i.multiple)
        return null;
      let F = i.modelValue.file ? i.modelValue.file.name : yn.isString(i.modelValue) ? i.modelValue : null;
      F = F.split("/").pop();
      const N = F.indexOf("?");
      return decodeURI(N > -1 ? F.substring(0, N) : F);
    }), b = te(() => i.modelValue && h.value ? ye(h.value) : "empty"), A = te(() => b.value === "image" || b.value === "empty" && c.value === i.placeholder ? { "background-image": `url(${c.value})` } : null), _ = te({
      get() {
        return i.modelValue ?? [];
      },
      set(F) {
        u("update:modelValue", i.multiple ? F : F[0]);
      }
    });
    et(() => {
      yn.isString(i.modelValue) && Ue(i.modelValue, "image") && (c.value = i.modelValue);
    });
    const T = te(() => {
      let F = Number(i.maxSize), N = 1;
      if (Number.isNaN(F)) {
        let G = i.maxSize.indexOf("GB");
        G > 0 ? N = 1024 * 1024 * 1024 : G = i.maxSize.indexOf("MB"), G > 0 ? N = 1024 * 1024 : G = i.maxSize.indexOf("KB"), G > 0 && (F = Number(i.maxSize.substring(0, G)));
      }
      return Number.isNaN(F) ? null : F * N;
    }), B = te(() => {
      const F = Number(i.maxSize);
      return Number.isNaN(F) ? i.maxSize : F >= 1073741824 ? (F / (1024 * 1024 * 1024)).toFixed(2) + "GB" : F >= 10485760 ? (F / (1024 * 1024)).toFixed(2) + "MB" : (F / 1024).toFixed(2) + "KB";
    }), V = te(() => i.acceptableTypes.map((F) => {
      var G;
      let N = (G = xe[F]) == null ? void 0 : G.split(",");
      return N ? Object.entries(U).map((le) => N.includes(le[1]) ? le[0].toUpperCase() : null).filter((le) => !!le).join(", ") : F.replace(".", "").toUpperCase();
    }).join(", ") + " up to " + B.value), z = (F) => F > 1024 * 1024 * 1024 * 1024 ? (F / 1024 / 1024 / 1024 / 1024).toFixed(2) + " TB" : F > 1024 * 1024 * 1024 ? (F / 1024 / 1024 / 1024).toFixed(2) + " GB" : F > 1024 * 1024 ? (F / 1024 / 1024).toFixed(2) + " MB" : F > 1024 ? (F / 1024).toFixed(2) + " KB" : F.toString() + " B";
    function q(F) {
      u("update:modelValue", i.multiple ? i.modelValue.filter((N) => N !== F) : null), v();
    }
    function Ie(F) {
      let N = F.split(".").pop();
      return N.indexOf("?") > -1 ? N.substring(0, N.indexOf("?")) : N;
    }
    function ye(F) {
      let N = Ie(F).toLowerCase();
      for (let G in xe)
        if (xe.hasOwnProperty(G) && Ee(N, G))
          return G;
      return "other";
    }
    function Ue(F, N) {
      return Ee(Ie(F), N);
    }
    function Ee(F, N) {
      var de;
      let G = (de = xe[N]) == null ? void 0 : de.split(",");
      return Object.entries(U).map(($e) => G.includes($e[1]) ? $e[0] : null).filter(($e) => !!$e).indexOf(F) > -1;
    }
    const fe = te(() => i.acceptableTypes.map((F) => (F = F.replace(".", ""), U[F] || xe[F] || null)).filter((F) => !!F).join(",")), U = {
      aac: "audio/aac",
      avi: "video/x-msvideo",
      azw: "application/vnd.amazon.ebook",
      bin: "application/octet-stream",
      bmp: "image/bmp",
      css: "text/css",
      csv: "text/csv",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      eot: "application/vnd.ms-fontobject",
      epub: "application/epub+zip",
      gz: "application/gzip",
      gif: "image/gif",
      htm: "text/html",
      html: "text/html",
      ico: "image/vnd.microsoft.icon",
      ics: "text/calendar",
      jar: "application/java-archive",
      jpeg: "image/jpeg",
      jpg: "image/jpeg",
      js: "text/javascript,",
      json: "application/json",
      jsonld: "application/ld+json",
      geojson: "application/geo+json",
      mid: "audio/midi,audio/x-midi",
      midi: "audio/midi,audio/x-midi",
      mjs: "text/javascript",
      mp3: "audio/mpeg",
      mpeg: "video/mpeg",
      mpkg: "application/vnd.apple.installer+xml",
      mov: "video/quicktime",
      odp: "application/vnd.oasis.opendocument.presentation",
      ods: "application/vnd.oasis.opendocument.spreadsheet",
      odt: "application/vnd.oasis.opendocument.text",
      oga: "audio/ogg",
      ogv: "video/ogg",
      ogx: "application/ogg",
      opus: "audio/opus",
      otf: "font/otf",
      png: "image/png",
      pdf: "application/pdf",
      php: "application/x-httpd-php",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      rar: "application/vnd.rar",
      rtf: "application/rtf",
      sh: "application/x-sh",
      svg: "image/svg+xml",
      swf: "application/x-shockwave-flash",
      tar: "application/x-tar",
      tif: "image/tiff",
      tiff: "image/tiff",
      ts: "video/mp2t",
      ttf: "font/ttf",
      txt: "text/plain",
      vsd: "application/vnd.visio",
      wav: "audio/wav",
      weba: "audio/webm",
      webm: "video/webm",
      webp: "image/webp",
      woff: "font/woff",
      woff2: "font/woff2",
      xhtml: "application/xhtml+xml",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      xml: "application/xml",
      xul: "application/vnd.mozilla.xul+xml",
      zip: "application/zip",
      mp4: "video/mp4"
    }, xe = {
      image: [
        U.bmp,
        U.gif,
        U.ico,
        U.jpeg,
        U.jpg,
        U.png,
        U.svg,
        U.tif,
        U.tiff,
        U.webp
      ].join(","),
      video: [
        U.avi,
        U.mpeg,
        U.mov,
        U.ogv,
        U.ts,
        U.webm,
        U.mp4
      ].join(","),
      document: [
        U.doc,
        U.docx,
        U.odp,
        U.ods,
        U.odt,
        U.pdf,
        U.rtf,
        U.txt,
        U.xls,
        U.xlsx
      ].join(","),
      audio: [
        U.aac,
        U.mid,
        U.midi,
        U.mp3,
        U.oga,
        U.opus,
        U.wav,
        U.weba
      ].join(",")
    };
    return (F, N) => {
      var G, le;
      return I(), W("div", {
        class: qe({ "blur-sm": r.disabled })
      }, [
        K(h) ? (I(), W("div", u0, [
          Y("div", {
            class: "bg-contain bg-no-repeat bg-center absolute top-2 left-2 bottom-2 right-2 grid justify-items-center content-center items-center",
            style: jl(K(A))
          }, [
            K(A) ? ge("", !0) : (I(), W("div", o0, [
              K(b) === "document" || K(b) === "other" ? (I(), W("svg", s0, d0)) : ge("", !0),
              K(b) === "image" ? (I(), W("svg", c0, p0)) : ge("", !0),
              K(b) === "video" ? (I(), W("svg", m0, v0)) : ge("", !0),
              K(b) === "sound" ? (I(), W("svg", y0, w0)) : ge("", !0),
              K(b) === "empty" ? (I(), W("svg", x0, A0)) : ge("", !0),
              K(b) !== "image" ? (I(), W("div", O0, [
                K(yn.isString)(r.modelValue) ? (I(), W("a", {
                  key: 0,
                  href: r.modelValue,
                  target: "_blank",
                  class: "hover:underline"
                }, Ce(K(h)), 9, E0)) : (I(), W("span", _0, Ce(K(h)), 1))
              ])) : ge("", !0)
            ]))
          ], 4),
          r.modelValue && r.modelValue != r.placeholder ? (I(), W("button", {
            key: 0,
            onClick: N[0] || (N[0] = (de) => q()),
            type: "button",
            class: "text-red-500 rounded-full hover:bg-red-200 p-1 shadow border border-red-200 bg-white absolute -top-3 -right-3"
          }, L0)) : ge("", !0)
        ])) : ge("", !0),
        K(h) ? ge("", !0) : (I(), W("div", {
          key: 1,
          class: qe(["mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-white", (G = g.value) != null && G.dropActive ? "border-blue-500 bg-blue-100" : ""])
        }, [
          Y("div", T0, [
            (I(), W("svg", {
              class: qe([(le = g.value) != null && le.dropActive ? "text-blue-500" : "", "mx-auto h-12 w-12 text-gray-400"]),
              stroke: "currentColor",
              fill: "none",
              viewBox: "0 0 48 48",
              "aria-hidden": "true"
            }, k0, 2)),
            Y("div", D0, [
              ve(K(a0), {
                class: "relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500",
                "input-id": r.id,
                multiple: r.multiple,
                drop: !0,
                "drop-directory": !0,
                accept: K(fe),
                size: K(T),
                modelValue: K(_),
                "onUpdate:modelValue": N[1] || (N[1] = (de) => Xo(_) ? _.value = de : null),
                onInputFile: v,
                ref_key: "upload",
                ref: g
              }, {
                default: Ct(() => [
                  P0
                ]),
                _: 1
              }, 8, ["input-id", "multiple", "accept", "size", "modelValue"]),
              I0
            ]),
            Y("div", R0, Ce(K(V)), 1),
            r.multiple && K(_).length ? (I(), W("ul", B0, [
              (I(!0), W($t, null, Wt(K(_), (de) => (I(), W("li", {
                key: de.id,
                class: "p-2 flex items-center rounded-md"
              }, [
                Y("button", {
                  onClick: ($e) => q(de),
                  type: "button",
                  class: "text-red-500 rounded-full hover:bg-red-200 p-1"
                }, M0, 8, V0),
                Y("span", N0, Ce(de.name) + " - " + Ce(z(de.size)), 1)
              ]))), 128))
            ])) : ge("", !0)
          ])
        ], 2)),
        ge("", !0)
      ], 2);
    };
  }
};
var U0 = [
  "onActivate",
  "onAddUndo",
  "onBeforeAddUndo",
  "onBeforeExecCommand",
  "onBeforeGetContent",
  "onBeforeRenderUI",
  "onBeforeSetContent",
  "onBeforePaste",
  "onBlur",
  "onChange",
  "onClearUndos",
  "onClick",
  "onContextMenu",
  "onCopy",
  "onCut",
  "onDblclick",
  "onDeactivate",
  "onDirty",
  "onDrag",
  "onDragDrop",
  "onDragEnd",
  "onDragGesture",
  "onDragOver",
  "onDrop",
  "onExecCommand",
  "onFocus",
  "onFocusIn",
  "onFocusOut",
  "onGetContent",
  "onHide",
  "onInit",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onLoadContent",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onNodeChange",
  "onObjectResizeStart",
  "onObjectResized",
  "onObjectSelected",
  "onPaste",
  "onPostProcess",
  "onPostRender",
  "onPreProcess",
  "onProgressState",
  "onRedo",
  "onRemove",
  "onReset",
  "onSaveContent",
  "onSelectionChange",
  "onSetAttrib",
  "onSetContent",
  "onShow",
  "onSubmit",
  "onUndo",
  "onVisualAid"
], H0 = function(r) {
  return U0.map(function(u) {
    return u.toLowerCase();
  }).indexOf(r.toLowerCase()) !== -1;
}, W0 = function(r, u, i) {
  Object.keys(u).filter(H0).forEach(function(c) {
    var g = u[c];
    typeof g == "function" && (c === "onInit" ? g(r, i) : i.on(c.substring(2), function(v) {
      return g(v, i);
    }));
  });
}, z0 = function(r, u, i, c) {
  var g = r.modelEvents ? r.modelEvents : null, v = Array.isArray(g) ? g.join(" ") : g;
  lt(c, function(h, b) {
    i && typeof h == "string" && h !== b && h !== i.getContent({ format: r.outputFormat }) && i.setContent(h);
  }), i.on(v || "change input undo redo", function() {
    u.emit("update:modelValue", i.getContent({ format: r.outputFormat }));
  });
}, q0 = function(r, u, i, c, g, v) {
  c.setContent(v()), i.attrs["onUpdate:modelValue"] && z0(u, i, c, g), W0(r, i.attrs, c);
}, Wo = 0, es = function(r) {
  var u = Date.now(), i = Math.floor(Math.random() * 1e9);
  return Wo++, r + "_" + i + Wo + String(u);
}, G0 = function(r) {
  return r !== null && r.tagName.toLowerCase() === "textarea";
}, zo = function(r) {
  return typeof r > "u" || r === "" ? [] : Array.isArray(r) ? r : r.split(" ");
}, K0 = function(r, u) {
  return zo(r).concat(zo(u));
}, j0 = function(r) {
  return r == null;
}, qo = function() {
  return {
    listeners: [],
    scriptId: es("tiny-script"),
    scriptLoaded: !1
  };
}, Y0 = function() {
  var r = qo(), u = function(g, v, h, b) {
    var A = v.createElement("script");
    A.referrerPolicy = "origin", A.type = "application/javascript", A.id = g, A.src = h;
    var _ = function() {
      A.removeEventListener("load", _), b();
    };
    A.addEventListener("load", _), v.head && v.head.appendChild(A);
  }, i = function(g, v, h) {
    r.scriptLoaded ? h() : (r.listeners.push(h), g.getElementById(r.scriptId) || u(r.scriptId, g, v, function() {
      r.listeners.forEach(function(b) {
        return b();
      }), r.scriptLoaded = !0;
    }));
  }, c = function() {
    r = qo();
  };
  return {
    load: i,
    reinitialize: c
  };
}, X0 = Y0(), Z0 = function() {
  return typeof window < "u" ? window : global;
}, $n = function() {
  var r = Z0();
  return r && r.tinymce ? r.tinymce : null;
}, J0 = {
  apiKey: String,
  cloudChannel: String,
  id: String,
  init: Object,
  initialValue: String,
  inline: Boolean,
  modelEvents: [String, Array],
  plugins: [String, Array],
  tagName: String,
  toolbar: [String, Array],
  modelValue: String,
  disabled: Boolean,
  tinymceScriptSrc: String,
  outputFormat: {
    type: String,
    validator: function(r) {
      return r === "html" || r === "text";
    }
  }
}, Dn = globalThis && globalThis.__assign || function() {
  return Dn = Object.assign || function(r) {
    for (var u, i = 1, c = arguments.length; i < c; i++) {
      u = arguments[i];
      for (var g in u)
        Object.prototype.hasOwnProperty.call(u, g) && (r[g] = u[g]);
    }
    return r;
  }, Dn.apply(this, arguments);
}, Q0 = function(r, u, i, c) {
  return r(c || "div", {
    id: u,
    ref: i
  });
}, e1 = function(r, u, i) {
  return r("textarea", {
    id: u,
    visibility: "hidden",
    ref: i
  });
}, t1 = ft({
  props: J0,
  setup: function(r, u) {
    var i = r.init ? Dn({}, r.init) : {}, c = rv(r), g = c.disabled, v = c.modelValue, h = c.tagName, b = ie(null), A = null, _ = r.id || es("tiny-vue"), T = r.init && r.init.inline || r.inline, B = !!u.attrs["onUpdate:modelValue"], V = !0, z = r.initialValue ? r.initialValue : "", q = "", Ie = function(Ee) {
      return B ? function() {
        return v != null && v.value ? v.value : "";
      } : function() {
        return Ee ? z : q;
      };
    }, ye = function() {
      var Ee = Ie(V), fe = Dn(Dn({}, i), { readonly: r.disabled, selector: "#" + _, plugins: K0(i.plugins, r.plugins), toolbar: r.toolbar || i.toolbar, inline: T, setup: function(U) {
        A = U, U.on("init", function(xe) {
          return q0(xe, r, u, U, v, Ee);
        }), typeof i.setup == "function" && i.setup(U);
      } });
      G0(b.value) && (b.value.style.visibility = ""), $n().init(fe), V = !1;
    };
    lt(g, function(Ee) {
      var fe;
      A !== null && (typeof ((fe = A.mode) === null || fe === void 0 ? void 0 : fe.set) == "function" ? A.mode.set(Ee ? "readonly" : "design") : A.setMode(Ee ? "readonly" : "design"));
    }), lt(h, function(Ee) {
      var fe;
      B || (q = A.getContent()), (fe = $n()) === null || fe === void 0 || fe.remove(A), vi(function() {
        return ye();
      });
    }), et(function() {
      if ($n() !== null)
        ye();
      else if (b.value && b.value.ownerDocument) {
        var Ee = r.cloudChannel ? r.cloudChannel : "6", fe = r.apiKey ? r.apiKey : "no-api-key", U = j0(r.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/" + fe + "/tinymce/" + Ee + "/tinymce.min.js" : r.tinymceScriptSrc;
        X0.load(b.value.ownerDocument, U, ye);
      }
    }), iv(function() {
      $n() !== null && $n().remove(A);
    }), T || (lv(function() {
      V || ye();
    }), av(function() {
      var Ee;
      B || (q = A.getContent()), (Ee = $n()) === null || Ee === void 0 || Ee.remove(A);
    }));
    var Ue = function(Ee) {
      var fe;
      q = A.getContent(), (fe = $n()) === null || fe === void 0 || fe.remove(A), i = Dn(Dn({}, i), Ee), vi(function() {
        return ye();
      });
    };
    return u.expose({
      rerender: Ue
    }), function() {
      return T ? Q0(Ze, _, b, r.tagName) : e1(Ze, _, b);
    };
  }
});
const n1 = {
  __name: "Wysiwyg",
  setup(r) {
    return (u, i) => (I(), Oe(K(t1), {
      "api-key": "l8gtrjg6vtcgsosw58s7yzg4cmp59sfa3o2wmx6yko5bpdu0",
      init: {
        plugins: "lists link image lists table code help wordcount",
        toolbar: "undo redo | styles | bold italic numlist bullist | link image "
      }
    }));
  }
}, r1 = { key: 0 }, i1 = ["for"], l1 = { class: "cursor-pointer ml-2 align-middle" }, a1 = {
  key: 0,
  class: "text-red-600 ml-1"
}, u1 = { key: 1 }, o1 = ["for"], s1 = {
  key: 0,
  class: "text-red-600 ml-1"
}, f1 = { key: 2 }, d1 = ["id", "value", "placeholder", "disabled"], c1 = ["id", "type", "value", "placeholder", "autocomplete", "required", "disabled"], h1 = ["innerHTML"], p1 = {
  __name: "InputControl",
  props: {
    modelValue: {},
    placeholder: {},
    autocomplete: {},
    required: {},
    disabled: {},
    id: {
      type: String,
      default() {
        return Math.random().toString(36).slice(2);
      }
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default() {
        return "text";
      }
    },
    multiple: {
      type: [Boolean, Object],
      default() {
        return !1;
      }
    },
    select: {
      type: Object
    },
    errors: {
      type: [Array, String],
      default() {
        return [];
      }
    },
    attachments: {
      type: Array,
      default() {
        return [];
      }
    },
    acceptableTypes: {
      type: Array
    },
    maxSize: {
      type: [Number, String],
      default: "10MB"
    },
    info: {
      type: String
    },
    hideCheckbox: {
      type: Boolean,
      default: !1
    },
    indicateRequired: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "remove-attachment"],
  setup(r, { emit: u }) {
    const i = r, c = te(() => typeof i.errors == "string" ? [i.errors] : i.errors), g = ie(i.modelValue);
    lt(() => i.modelValue, (h) => {
      g.value = h;
    });
    function v(h) {
      u("update:modelValue", h);
    }
    return (h, b) => {
      var A;
      return I(), W("div", {
        class: qe({ error: (A = K(c)) == null ? void 0 : A.length })
      }, [
        r.type === "checkbox" ? (I(), W("div", r1, [
          Y("label", {
            for: r.id,
            class: qe(["checkbox-label", { disabled: r.disabled }])
          }, [
            ve(hv, {
              id: r.id,
              checked: r.modelValue,
              "onUpdate:checked": v,
              required: r.required,
              disabled: r.disabled,
              class: qe({ hidden: r.hideCheckbox })
            }, null, 8, ["id", "checked", "required", "disabled", "class"]),
            Fe(h.$slots, "svg"),
            Y("span", l1, [
              Lt(Ce(r.label), 1),
              r.indicateRequired && r.required ? (I(), W("span", a1, "*")) : ge("", !0)
            ])
          ], 10, i1)
        ])) : (I(), W("div", u1, [
          r.label ? (I(), W("label", {
            key: 0,
            for: r.id,
            class: qe(["input-label", { disabled: r.disabled }])
          }, [
            Lt(Ce(r.label), 1),
            r.indicateRequired && r.required ? (I(), W("span", s1, "*")) : ge("", !0)
          ], 10, o1)) : ge("", !0),
          r.select ? (I(), Oe(Mv, {
            key: 1,
            id: r.id,
            type: r.select.type,
            multiple: r.select.multiple,
            url: r.select.url,
            field: r.select.field,
            label: r.select.label,
            options: r.select.options,
            filters: r.select.filters,
            "search-columns": r.select.searchColumns,
            limit: r.select.limit,
            preload: r.select.preload,
            modelValue: g.value,
            "onUpdate:modelValue": [
              b[0] || (b[0] = (_) => g.value = _),
              b[1] || (b[1] = (_) => h.$emit("update:modelValue", _))
            ],
            disabled: r.disabled,
            placeholder: r.placeholder ? r.placeholder : r.label
          }, null, 8, ["id", "type", "multiple", "url", "field", "label", "options", "filters", "search-columns", "limit", "preload", "modelValue", "disabled", "placeholder"])) : r.type === "attachments" ? (I(), W("div", f1, [
            ve(r0, {
              attachments: r.attachments,
              onRemove: b[2] || (b[2] = (_) => u("remove-attachment", _))
            }, null, 8, ["attachments"]),
            ve(Ho, {
              multiple: "",
              id: r.id,
              modelValue: g.value,
              "onUpdate:modelValue": [
                b[3] || (b[3] = (_) => g.value = _),
                b[4] || (b[4] = (_) => h.$emit("update:modelValue", _))
              ],
              "acceptable-types": r.acceptableTypes,
              "max-size": r.maxSize,
              placeholder: r.placeholder,
              disabled: r.disabled
            }, null, 8, ["id", "modelValue", "acceptable-types", "max-size", "placeholder", "disabled"])
          ])) : r.type === "wysiwyg" ? (I(), Oe(n1, {
            key: 3,
            modelValue: g.value,
            "onUpdate:modelValue": [
              b[5] || (b[5] = (_) => g.value = _),
              b[6] || (b[6] = (_) => h.$emit("update:modelValue", _))
            ]
          }, null, 8, ["modelValue"])) : r.type === "image" || r.type === "file" ? (I(), Oe(Ho, {
            key: 4,
            id: r.id,
            modelValue: g.value,
            "onUpdate:modelValue": [
              b[7] || (b[7] = (_) => g.value = _),
              b[8] || (b[8] = (_) => h.$emit("update:modelValue", _))
            ],
            "acceptable-types": r.acceptableTypes,
            "max-size": r.maxSize,
            placeholder: r.placeholder,
            disabled: r.disabled
          }, null, 8, ["id", "modelValue", "acceptable-types", "max-size", "placeholder", "disabled"])) : r.type === "textarea" ? (I(), W("textarea", {
            key: 5,
            id: r.id,
            class: "input-textarea",
            rows: "10",
            value: r.modelValue,
            onInput: b[9] || (b[9] = (_) => h.$emit("update:modelValue", _.target.value)),
            placeholder: r.placeholder ? r.placeholder : r.label,
            disabled: r.disabled
          }, null, 40, d1)) : r.multiple ? (I(), Oe(jv, {
            key: 6,
            id: r.id,
            type: r.type,
            field: r.multiple.field,
            label: r.multiple.label,
            "can-add": r.multiple.canAdd,
            taggable: r.multiple.taggable,
            options: r.multiple.options,
            modelValue: g.value,
            "onUpdate:modelValue": [
              b[10] || (b[10] = (_) => g.value = _),
              b[11] || (b[11] = (_) => h.$emit("update:modelValue", _))
            ],
            class: "mt-1",
            placeholder: r.placeholder ? r.placeholder : r.label,
            disabled: r.disabled
          }, null, 8, ["id", "type", "field", "label", "can-add", "taggable", "options", "modelValue", "placeholder", "disabled"])) : (I(), W("input", {
            key: 7,
            id: r.id,
            class: "input-text",
            type: r.type,
            value: r.modelValue,
            onInput: b[12] || (b[12] = (_) => h.$emit("update:modelValue", _.target.value)),
            placeholder: r.placeholder ? r.placeholder : r.label,
            autocomplete: r.autocomplete,
            required: r.required,
            disabled: r.disabled
          }, null, 40, c1))
        ])),
        r.info ? (I(), W("div", {
          key: 2,
          class: "text-sm text-gray-400",
          innerHTML: r.info
        }, null, 8, h1)) : ge("", !0),
        (I(!0), W($t, null, Wt(K(c), (_) => (I(), Oe(dv, {
          message: _.replaceAll(".file", "")
        }, null, 8, ["message"]))), 256))
      ], 2);
    };
  }
}, m1 = {
  __name: "FormInput",
  props: {
    form: {
      type: Object,
      required: !0
    },
    field: {
      type: String,
      required: !0
    },
    id: {},
    label: {
      type: String
    },
    type: {
      type: String
    },
    multiple: {
      type: [Boolean, Object],
      default() {
        return !1;
      }
    },
    select: {
      type: Object
    },
    acceptableTypes: {
      type: Array
    },
    maxSize: {
      type: [Number, String],
      default: "10MB"
    },
    info: {
      type: String
    },
    placeholder: {},
    autocomplete: {},
    required: {},
    disabled: {},
    indicateRequired: {
      type: Boolean,
      default: !1
    }
  },
  setup(r) {
    const u = r, i = te(() => u.id ? u.id : u.field + "_" + Math.random().toString(36).slice(2)), c = te(() => u.label ? u.label : ra(u.field)), g = te(() => {
      let h = u.field + (u.type === "file" ? ".file" : "");
      return u.form.errors && u.form.errors[h] ? u.form.errors[h] : [];
    });
    function v(h) {
      u.form.attachments = u.form.attachments.filter((b) => b.id != h.id);
    }
    return (h, b) => (I(), Oe(p1, {
      id: K(i),
      type: r.type,
      multiple: r.multiple,
      select: r.select,
      label: K(c),
      modelValue: r.form[r.field],
      "onUpdate:modelValue": b[0] || (b[0] = (A) => r.form[r.field] = A),
      attachments: r.form.attachments,
      "acceptable-types": r.acceptableTypes,
      "max-size": r.maxSize,
      errors: K(g),
      placeholder: r.placeholder,
      autocomplete: r.autocomplete,
      required: r.required,
      disabled: r.disabled,
      info: r.info,
      "indicate-required": r.indicateRequired,
      onRemoveAttachment: v
    }, null, 8, ["id", "type", "multiple", "select", "label", "modelValue", "attachments", "acceptable-types", "max-size", "errors", "placeholder", "autocomplete", "required", "disabled", "info", "indicate-required"]));
  }
}, g1 = {
  __name: "FormInputGroup",
  props: {
    class: {},
    form: {
      type: Object,
      required: !0
    },
    inputs: {
      type: Array,
      default() {
        return [];
      }
    },
    indicateRequired: {
      type: Boolean,
      default: !1
    }
  },
  setup(r) {
    const u = r, i = te(() => u.class ? u.class : "space-y-6"), c = te(() => u.inputs.length ? u.inputs : Object.keys(u.form).filter((g) => g !== "id").map((g) => ({ field: g })));
    return (g, v) => (I(), W("div", {
      class: qe(K(i))
    }, [
      (I(!0), W($t, null, Wt(K(c), (h) => (I(), Oe(m1, {
        form: r.form,
        field: h.field,
        id: h.id,
        class: qe(h.class),
        type: h.type,
        multiple: h.multiple,
        "acceptable-types": h.acceptableTypes,
        "max-size": h.maxSize,
        select: h.select,
        label: h.label,
        placeholder: h.placeholder,
        autocomplete: h.autocomplete,
        required: h.required,
        disabled: h.disabled,
        info: h.info,
        "indicate-required": typeof h.indicateRequired < "u" ? h.indicateRequired : r.indicateRequired
      }, null, 8, ["form", "field", "id", "class", "type", "multiple", "acceptable-types", "max-size", "select", "label", "placeholder", "autocomplete", "required", "disabled", "info", "indicate-required"]))), 256)),
      Fe(g.$slots, "default")
    ], 2));
  }
}, v1 = ["href"], y1 = ["type"], mi = {
  __name: "FormButton",
  props: {
    context: {
      type: String,
      default: "btn-primary"
    },
    type: {
      type: String,
      default: "submit"
    },
    href: {
      type: String
    }
  },
  setup(r) {
    return (u, i) => r.type === "link" ? (I(), W("a", {
      key: 0,
      href: r.href,
      class: qe(r.context)
    }, [
      Fe(u.$slots, "default")
    ], 10, v1)) : (I(), W("button", {
      key: 1,
      type: r.type,
      class: qe(r.context)
    }, [
      Fe(u.$slots, "default")
    ], 10, y1));
  }
};
function Tt(r, u, ...i) {
  if (r in u) {
    let g = u[r];
    return typeof g == "function" ? g(...i) : g;
  }
  let c = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(u).map((g) => `"${g}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(c, Tt), c;
}
var yi = ((r) => (r[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r))(yi || {}), bn = ((r) => (r[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r))(bn || {});
function yt({ visible: r = !0, features: u = 0, ourProps: i, theirProps: c, ...g }) {
  var v;
  let h = b1(c, i), b = Object.assign(g, { props: h });
  if (r || u & 2 && h.static)
    return ql(b);
  if (u & 1) {
    let A = (v = h.unmount) == null || v ? 0 : 1;
    return Tt(A, { [0]() {
      return null;
    }, [1]() {
      return ql({ ...g, props: { ...h, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ql(b);
}
function ql({ props: r, attrs: u, slots: i, slot: c, name: g }) {
  var v;
  let { as: h, ...b } = ns(r, ["unmount", "static"]), A = (v = i.default) == null ? void 0 : v.call(i, c), _ = {};
  if (c) {
    let T = !1, B = [];
    for (let [V, z] of Object.entries(c))
      typeof z == "boolean" && (T = !0), z === !0 && B.push(V);
    T && (_["data-headlessui-state"] = B.join(" "));
  }
  if (h === "template") {
    if (A = ts(A ?? []), Object.keys(b).length > 0 || Object.keys(u).length > 0) {
      let [T, ...B] = A ?? [];
      if (!w1(T) || B.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${g} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(b).concat(Object.keys(u)).sort((V, z) => V.localeCompare(z)).map((V) => `  - ${V}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((V) => `  - ${V}`).join(`
`)].join(`
`));
      return uv(T, Object.assign({}, b, _));
    }
    return Array.isArray(A) && A.length === 1 ? A[0] : A;
  }
  return Ze(h, Object.assign({}, b, _), { default: () => A });
}
function ts(r) {
  return r.flatMap((u) => u.type === $t ? ts(u.children) : [u]);
}
function b1(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let u = {}, i = {};
  for (let c of r)
    for (let g in c)
      g.startsWith("on") && typeof c[g] == "function" ? (i[g] != null || (i[g] = []), i[g].push(c[g])) : u[g] = c[g];
  if (u.disabled || u["aria-disabled"])
    return Object.assign(u, Object.fromEntries(Object.keys(i).map((c) => [c, void 0])));
  for (let c in i)
    Object.assign(u, { [c](g, ...v) {
      let h = i[c];
      for (let b of h) {
        if (g instanceof Event && g.defaultPrevented)
          return;
        b(g, ...v);
      }
    } });
  return u;
}
function ns(r, u = []) {
  let i = Object.assign({}, r);
  for (let c of u)
    c in i && delete i[c];
  return i;
}
function w1(r) {
  return r == null ? !1 : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
let x1 = 0;
function S1() {
  return ++x1;
}
function In() {
  return S1();
}
var rs = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(rs || {});
function zt(r) {
  var u;
  return r == null || r.value == null ? null : (u = r.value.$el) != null ? u : r.value;
}
let is = Symbol("Context");
var Pn = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(Pn || {});
function A1() {
  return ia() !== null;
}
function ia() {
  return qt(is, null);
}
function O1(r) {
  rn(is, r);
}
const wi = typeof window > "u" || typeof document > "u";
function er(r) {
  if (wi)
    return null;
  if (r instanceof Node)
    return r.ownerDocument;
  if (r != null && r.hasOwnProperty("value")) {
    let u = zt(r);
    if (u)
      return u.ownerDocument;
  }
  return document;
}
let Xl = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((r) => `${r}:not([tabindex='-1'])`).join(",");
var vn = ((r) => (r[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r))(vn || {}), ls = ((r) => (r[r.Error = 0] = "Error", r[r.Overflow = 1] = "Overflow", r[r.Success = 2] = "Success", r[r.Underflow = 3] = "Underflow", r))(ls || {}), E1 = ((r) => (r[r.Previous = -1] = "Previous", r[r.Next = 1] = "Next", r))(E1 || {});
function _1(r = document.body) {
  return r == null ? [] : Array.from(r.querySelectorAll(Xl)).sort((u, i) => Math.sign((u.tabIndex || Number.MAX_SAFE_INTEGER) - (i.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var as = ((r) => (r[r.Strict = 0] = "Strict", r[r.Loose = 1] = "Loose", r))(as || {});
function C1(r, u = 0) {
  var i;
  return r === ((i = er(r)) == null ? void 0 : i.body) ? !1 : Tt(u, { [0]() {
    return r.matches(Xl);
  }, [1]() {
    let c = r;
    for (; c !== null; ) {
      if (c.matches(Xl))
        return !0;
      c = c.parentElement;
    }
    return !1;
  } });
}
function Qn(r) {
  r == null || r.focus({ preventScroll: !0 });
}
let L1 = ["textarea", "input"].join(",");
function T1(r) {
  var u, i;
  return (i = (u = r == null ? void 0 : r.matches) == null ? void 0 : u.call(r, L1)) != null ? i : !1;
}
function $1(r, u = (i) => i) {
  return r.slice().sort((i, c) => {
    let g = u(i), v = u(c);
    if (g === null || v === null)
      return 0;
    let h = g.compareDocumentPosition(v);
    return h & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : h & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function gi(r, u, { sorted: i = !0, relativeTo: c = null, skipElements: g = [] } = {}) {
  var v;
  let h = (v = Array.isArray(r) ? r.length > 0 ? r[0].ownerDocument : document : r == null ? void 0 : r.ownerDocument) != null ? v : document, b = Array.isArray(r) ? i ? $1(r) : r : _1(r);
  g.length > 0 && (b = b.filter((q) => !g.includes(q))), c = c ?? h.activeElement;
  let A = (() => {
    if (u & 5)
      return 1;
    if (u & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), _ = (() => {
    if (u & 1)
      return 0;
    if (u & 2)
      return Math.max(0, b.indexOf(c)) - 1;
    if (u & 4)
      return Math.max(0, b.indexOf(c)) + 1;
    if (u & 8)
      return b.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), T = u & 32 ? { preventScroll: !0 } : {}, B = 0, V = b.length, z;
  do {
    if (B >= V || B + V <= 0)
      return 0;
    let q = _ + B;
    if (u & 16)
      q = (q + V) % V;
    else {
      if (q < 0)
        return 3;
      if (q >= V)
        return 1;
    }
    z = b[q], z == null || z.focus(T), B += A;
  } while (z !== h.activeElement);
  return u & 6 && T1(z) && z.select(), z.hasAttribute("tabindex") || z.setAttribute("tabindex", "0"), 2;
}
function Gl(r, u, i) {
  wi || Bt((c) => {
    document.addEventListener(r, u, i), c(() => document.removeEventListener(r, u, i));
  });
}
function k1(r, u, i = te(() => !0)) {
  function c(v, h) {
    if (!i.value || v.defaultPrevented)
      return;
    let b = h(v);
    if (b === null || !b.getRootNode().contains(b))
      return;
    let A = function _(T) {
      return typeof T == "function" ? _(T()) : Array.isArray(T) || T instanceof Set ? T : [T];
    }(r);
    for (let _ of A) {
      if (_ === null)
        continue;
      let T = _ instanceof HTMLElement ? _ : zt(_);
      if (T != null && T.contains(b) || v.composed && v.composedPath().includes(T))
        return;
    }
    return !C1(b, as.Loose) && b.tabIndex !== -1 && v.preventDefault(), u(v, b);
  }
  let g = ie(null);
  Gl("mousedown", (v) => {
    var h, b;
    i.value && (g.value = ((b = (h = v.composedPath) == null ? void 0 : h.call(v)) == null ? void 0 : b[0]) || v.target);
  }, !0), Gl("click", (v) => {
    !g.value || (c(v, () => g.value), g.value = null);
  }, !0), Gl("blur", (v) => c(v, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var bi = ((r) => (r[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r))(bi || {});
let Zl = ft({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r, { slots: u, attrs: i }) {
  return () => {
    let { features: c, ...g } = r, v = { "aria-hidden": (c & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(c & 4) === 4 && (c & 2) !== 2 && { display: "none" } } };
    return yt({ ourProps: v, theirProps: g, slot: {}, attrs: i, slots: u, name: "Hidden" });
  };
} });
function D1(r, u, i) {
  wi || Bt((c) => {
    window.addEventListener(r, u, i), c(() => window.removeEventListener(r, u, i));
  });
}
var xr = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(xr || {});
function P1() {
  let r = ie(0);
  return D1("keydown", (u) => {
    u.key === "Tab" && (r.value = u.shiftKey ? 1 : 0);
  }), r;
}
function us(r, u, i, c) {
  wi || Bt((g) => {
    r = r ?? window, r.addEventListener(u, i, c), g(() => r.removeEventListener(u, i, c));
  });
}
function I1(r) {
  typeof queueMicrotask == "function" ? queueMicrotask(r) : Promise.resolve().then(r).catch((u) => setTimeout(() => {
    throw u;
  }));
}
var os = ((r) => (r[r.None = 1] = "None", r[r.InitialFocus = 2] = "InitialFocus", r[r.TabLock = 4] = "TabLock", r[r.FocusLock = 8] = "FocusLock", r[r.RestoreFocus = 16] = "RestoreFocus", r[r.All = 30] = "All", r))(os || {});
let wr = Object.assign(ft({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ie(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(r, { attrs: u, slots: i, expose: c }) {
  let g = ie(null);
  c({ el: g, $el: g });
  let v = te(() => er(g));
  R1({ ownerDocument: v }, te(() => Boolean(r.features & 16)));
  let h = B1({ ownerDocument: v, container: g, initialFocus: te(() => r.initialFocus) }, te(() => Boolean(r.features & 2)));
  V1({ ownerDocument: v, container: g, containers: r.containers, previousActiveElement: h }, te(() => Boolean(r.features & 8)));
  let b = P1();
  function A(V) {
    let z = zt(g);
    z && ((q) => q())(() => {
      Tt(b.value, { [xr.Forwards]: () => gi(z, vn.First, { skipElements: [V.relatedTarget] }), [xr.Backwards]: () => gi(z, vn.Last, { skipElements: [V.relatedTarget] }) });
    });
  }
  let _ = ie(!1);
  function T(V) {
    V.key === "Tab" && (_.value = !0, requestAnimationFrame(() => {
      _.value = !1;
    }));
  }
  function B(V) {
    var z;
    let q = new Set((z = r.containers) == null ? void 0 : z.value);
    q.add(g);
    let Ie = V.relatedTarget;
    !Ie || Ie.dataset.headlessuiFocusGuard !== "true" && (ss(q, Ie) || (_.value ? gi(zt(g), Tt(b.value, { [xr.Forwards]: () => vn.Next, [xr.Backwards]: () => vn.Previous }) | vn.WrapAround, { relativeTo: V.target }) : V.target instanceof HTMLElement && Qn(V.target)));
  }
  return () => {
    let V = {}, z = { ref: g, onKeydown: T, onFocusout: B }, { features: q, initialFocus: Ie, containers: ye, ...Ue } = r;
    return Ze($t, [Boolean(q & 4) && Ze(Zl, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: A, features: bi.Focusable }), yt({ ourProps: z, theirProps: { ...u, ...Ue }, slot: V, attrs: u, slots: i, name: "FocusTrap" }), Boolean(q & 4) && Ze(Zl, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: A, features: bi.Focusable })]);
  };
} }), { features: os });
function R1({ ownerDocument: r }, u) {
  let i = ie(null);
  function c() {
    var v;
    i.value || (i.value = (v = r.value) == null ? void 0 : v.activeElement);
  }
  function g() {
    !i.value || (Qn(i.value), i.value = null);
  }
  et(() => {
    lt(u, (v, h) => {
      v !== h && (v ? c() : g());
    }, { immediate: !0 });
  }), wn(g);
}
function B1({ ownerDocument: r, container: u, initialFocus: i }, c) {
  let g = ie(null), v = ie(!1);
  return et(() => v.value = !0), wn(() => v.value = !1), et(() => {
    lt([u, i, c], (h, b) => {
      if (h.every((_, T) => (b == null ? void 0 : b[T]) === _) || !c.value)
        return;
      let A = zt(u);
      !A || I1(() => {
        var _, T;
        if (!v.value)
          return;
        let B = zt(i), V = (_ = r.value) == null ? void 0 : _.activeElement;
        if (B) {
          if (B === V) {
            g.value = V;
            return;
          }
        } else if (A.contains(V)) {
          g.value = V;
          return;
        }
        B ? Qn(B) : gi(A, vn.First | vn.NoScroll) === ls.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), g.value = (T = r.value) == null ? void 0 : T.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), g;
}
function V1({ ownerDocument: r, container: u, containers: i, previousActiveElement: c }, g) {
  var v;
  us((v = r.value) == null ? void 0 : v.defaultView, "focus", (h) => {
    if (!g.value)
      return;
    let b = new Set(i == null ? void 0 : i.value);
    b.add(u);
    let A = c.value;
    if (!A)
      return;
    let _ = h.target;
    _ && _ instanceof HTMLElement ? ss(b, _) ? (c.value = _, Qn(_)) : (h.preventDefault(), h.stopPropagation(), Qn(A)) : Qn(c.value);
  }, !0);
}
function ss(r, u) {
  var i;
  for (let c of r)
    if ((i = c.value) != null && i.contains(u))
      return !0;
  return !1;
}
let Go = "body > *", Xn = /* @__PURE__ */ new Set(), gn = /* @__PURE__ */ new Map();
function Ko(r) {
  r.setAttribute("aria-hidden", "true"), r.inert = !0;
}
function jo(r) {
  let u = gn.get(r);
  !u || (u["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", u["aria-hidden"]), r.inert = u.inert);
}
function F1(r, u = ie(!0)) {
  Bt((i) => {
    if (!u.value || !r.value)
      return;
    let c = r.value, g = er(c);
    if (g) {
      Xn.add(c);
      for (let v of gn.keys())
        v.contains(c) && (jo(v), gn.delete(v));
      g.querySelectorAll(Go).forEach((v) => {
        if (v instanceof HTMLElement) {
          for (let h of Xn)
            if (v.contains(h))
              return;
          Xn.size === 1 && (gn.set(v, { "aria-hidden": v.getAttribute("aria-hidden"), inert: v.inert }), Ko(v));
        }
      }), i(() => {
        if (Xn.delete(c), Xn.size > 0)
          g.querySelectorAll(Go).forEach((v) => {
            if (v instanceof HTMLElement && !gn.has(v)) {
              for (let h of Xn)
                if (v.contains(h))
                  return;
              gn.set(v, { "aria-hidden": v.getAttribute("aria-hidden"), inert: v.inert }), Ko(v);
            }
          });
        else
          for (let v of gn.keys())
            jo(v), gn.delete(v);
      });
    }
  });
}
let fs = Symbol("ForcePortalRootContext");
function M1() {
  return qt(fs, !1);
}
let Jl = ft({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(r, { slots: u, attrs: i }) {
  return rn(fs, r.force), () => {
    let { force: c, ...g } = r;
    return yt({ theirProps: g, ourProps: {}, slot: {}, slots: u, attrs: i, name: "ForcePortalRoot" });
  };
} });
function N1(r) {
  let u = er(r);
  if (!u) {
    if (r === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`);
  }
  let i = u.getElementById("headlessui-portal-root");
  if (i)
    return i;
  let c = u.createElement("div");
  return c.setAttribute("id", "headlessui-portal-root"), u.body.appendChild(c);
}
let ds = ft({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r, { slots: u, attrs: i }) {
  let c = ie(null), g = te(() => er(c)), v = M1(), h = qt(cs, null), b = ie(v === !0 || h == null ? N1(c.value) : h.resolveTarget());
  return Bt(() => {
    v || h != null && (b.value = h.resolveTarget());
  }), wn(() => {
    var A, _;
    let T = (A = g.value) == null ? void 0 : A.getElementById("headlessui-portal-root");
    !T || b.value === T && b.value.children.length <= 0 && ((_ = b.value.parentElement) == null || _.removeChild(b.value));
  }), () => {
    if (b.value === null)
      return null;
    let A = { ref: c, "data-headlessui-portal": "" };
    return Ze(ov, { to: b.value }, yt({ ourProps: A, theirProps: r, slot: {}, attrs: i, slots: u, name: "Portal" }));
  };
} }), cs = Symbol("PortalGroupContext"), U1 = ft({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r, { attrs: u, slots: i }) {
  let c = sv({ resolveTarget() {
    return r.target;
  } });
  return rn(cs, c), () => {
    let { target: g, ...v } = r;
    return yt({ theirProps: v, ourProps: {}, slot: {}, attrs: u, slots: i, name: "PortalGroup" });
  };
} }), hs = Symbol("StackContext");
var Ql = ((r) => (r[r.Add = 0] = "Add", r[r.Remove = 1] = "Remove", r))(Ql || {});
function H1() {
  return qt(hs, () => {
  });
}
function W1({ type: r, enabled: u, element: i, onUpdate: c }) {
  let g = H1();
  function v(...h) {
    c == null || c(...h), g(...h);
  }
  et(() => {
    lt(u, (h, b) => {
      h ? v(0, r, i) : b === !0 && v(1, r, i);
    }, { immediate: !0, flush: "sync" });
  }), wn(() => {
    u.value && v(1, r, i);
  }), rn(hs, v);
}
let ps = Symbol("DescriptionContext");
function z1() {
  let r = qt(ps, null);
  if (r === null)
    throw new Error("Missing parent");
  return r;
}
function q1({ slot: r = ie({}), name: u = "Description", props: i = {} } = {}) {
  let c = ie([]);
  function g(v) {
    return c.value.push(v), () => {
      let h = c.value.indexOf(v);
      h !== -1 && c.value.splice(h, 1);
    };
  }
  return rn(ps, { register: g, slot: r, name: u, props: i }), te(() => c.value.length > 0 ? c.value.join(" ") : void 0);
}
let Ay = ft({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${In()}` } }, setup(r, { attrs: u, slots: i }) {
  let c = z1();
  return et(() => wn(c.register(r.id))), () => {
    let { name: g = "Description", slot: v = ie({}), props: h = {} } = c, { id: b, ...A } = r, _ = { ...Object.entries(h).reduce((T, [B, V]) => Object.assign(T, { [B]: K(V) }), {}), id: b };
    return yt({ ourProps: _, theirProps: A, slot: v.value, attrs: u, slots: i, name: g });
  };
} });
function la() {
  let r = [], u = [], i = { enqueue(c) {
    u.push(c);
  }, addEventListener(c, g, v, h) {
    return c.addEventListener(g, v, h), i.add(() => c.removeEventListener(g, v, h));
  }, requestAnimationFrame(...c) {
    let g = requestAnimationFrame(...c);
    i.add(() => cancelAnimationFrame(g));
  }, nextFrame(...c) {
    i.requestAnimationFrame(() => {
      i.requestAnimationFrame(...c);
    });
  }, setTimeout(...c) {
    let g = setTimeout(...c);
    i.add(() => clearTimeout(g));
  }, add(c) {
    r.push(c);
  }, dispose() {
    for (let c of r.splice(0))
      c();
  }, async workQueue() {
    for (let c of u.splice(0))
      await c();
  } };
  return i;
}
function G1() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var K1 = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(K1 || {});
let ea = Symbol("DialogContext");
function Ar(r) {
  let u = qt(ea, null);
  if (u === null) {
    let i = new Error(`<${r} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, Ar), i;
  }
  return u;
}
let hi = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", j1 = ft({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: hi }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${In()}` } }, emits: { close: (r) => !0 }, setup(r, { emit: u, attrs: i, slots: c, expose: g }) {
  var v;
  let h = ie(!1);
  et(() => {
    h.value = !0;
  });
  let b = ie(0), A = ia(), _ = te(() => r.open === hi && A !== null ? Tt(A.value, { [Pn.Open]: !0, [Pn.Closed]: !1 }) : r.open), T = ie(/* @__PURE__ */ new Set()), B = ie(null), V = ie(null), z = te(() => er(B));
  if (g({ el: B, $el: B }), !(r.open !== hi || A !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof _.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${_.value === hi ? void 0 : r.open}`);
  let q = te(() => h.value && _.value ? 0 : 1), Ie = te(() => q.value === 0), ye = te(() => b.value > 1), Ue = qt(ea, null) !== null, Ee = te(() => ye.value ? "parent" : "leaf");
  F1(B, te(() => ye.value ? Ie.value : !1)), W1({ type: "Dialog", enabled: te(() => q.value === 0), element: B, onUpdate: (N, G, le) => {
    if (G === "Dialog")
      return Tt(N, { [Ql.Add]() {
        T.value.add(le), b.value += 1;
      }, [Ql.Remove]() {
        T.value.delete(le), b.value -= 1;
      } });
  } });
  let fe = q1({ name: "DialogDescription", slot: te(() => ({ open: _.value })) }), U = ie(null), xe = { titleId: U, panelRef: ie(null), dialogState: q, setTitleId(N) {
    U.value !== N && (U.value = N);
  }, close() {
    u("close", !1);
  } };
  rn(ea, xe);
  function F() {
    var N, G, le;
    return [...Array.from((G = (N = z.value) == null ? void 0 : N.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? G : []).filter((de) => !(!(de instanceof HTMLElement) || de.contains(zt(V)) || xe.panelRef.value && de.contains(xe.panelRef.value))), (le = xe.panelRef.value) != null ? le : B.value];
  }
  return k1(() => F(), (N, G) => {
    xe.close(), vi(() => G == null ? void 0 : G.focus());
  }, te(() => q.value === 0 && !ye.value)), us((v = z.value) == null ? void 0 : v.defaultView, "keydown", (N) => {
    N.defaultPrevented || N.key === rs.Escape && q.value === 0 && (ye.value || (N.preventDefault(), N.stopPropagation(), xe.close()));
  }), Bt((N) => {
    var G;
    if (q.value !== 0 || Ue)
      return;
    let le = z.value;
    if (!le)
      return;
    let de = la(), $e = window.pageYOffset;
    function Vt(S, f, d) {
      let m = S.style.getPropertyValue(f);
      return Object.assign(S.style, { [f]: d }), de.add(() => {
        Object.assign(S.style, { [f]: m });
      });
    }
    let Ft = le == null ? void 0 : le.documentElement, ln = ((G = le.defaultView) != null ? G : window).innerWidth - Ft.clientWidth;
    if (Vt(Ft, "overflow", "hidden"), ln > 0) {
      let S = Ft.clientWidth - Ft.offsetWidth, f = ln - S;
      Vt(Ft, "paddingRight", `${f}px`);
    }
    if (G1()) {
      Vt(le.body, "marginTop", `-${$e}px`), window.scrollTo(0, 0);
      let S = null;
      de.addEventListener(le, "click", (f) => {
        if (f.target instanceof HTMLElement)
          try {
            let d = f.target.closest("a");
            if (!d)
              return;
            let { hash: m } = new URL(d.href), E = le.querySelector(m);
            E && !F().some((C) => C.contains(E)) && (S = E);
          } catch {
          }
      }, !0), de.addEventListener(le, "touchmove", (f) => {
        f.target instanceof HTMLElement && !F().some((d) => d.contains(f.target)) && f.preventDefault();
      }, { passive: !1 }), de.add(() => {
        window.scrollTo(0, window.pageYOffset + $e), S && S.isConnected && (S.scrollIntoView({ block: "nearest" }), S = null);
      });
    }
    N(de.dispose);
  }), Bt((N) => {
    if (q.value !== 0)
      return;
    let G = zt(B);
    if (!G)
      return;
    let le = new IntersectionObserver((de) => {
      for (let $e of de)
        $e.boundingClientRect.x === 0 && $e.boundingClientRect.y === 0 && $e.boundingClientRect.width === 0 && $e.boundingClientRect.height === 0 && xe.close();
    });
    le.observe(G), N(() => le.disconnect());
  }), () => {
    let { id: N, open: G, initialFocus: le, ...de } = r, $e = { ...i, ref: B, id: N, role: "dialog", "aria-modal": q.value === 0 ? !0 : void 0, "aria-labelledby": U.value, "aria-describedby": fe.value }, Vt = { open: q.value === 0 };
    return Ze(Jl, { force: !0 }, () => [Ze(ds, () => Ze(U1, { target: B.value }, () => Ze(Jl, { force: !1 }, () => Ze(wr, { initialFocus: le, containers: T, features: Ie.value ? Tt(Ee.value, { parent: wr.features.RestoreFocus, leaf: wr.features.All & ~wr.features.FocusLock }) : wr.features.None }, () => yt({ ourProps: $e, theirProps: de, slot: Vt, attrs: i, slots: c, visible: q.value === 0, features: yi.RenderStrategy | yi.Static, name: "Dialog" }))))), Ze(Zl, { features: bi.Hidden, ref: V })]);
  };
} }), Y1 = ft({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${In()}` } }, setup(r, { attrs: u, slots: i }) {
  let c = Ar("DialogOverlay");
  function g(v) {
    v.target === v.currentTarget && (v.preventDefault(), v.stopPropagation(), c.close());
  }
  return () => {
    let { id: v, ...h } = r;
    return yt({ ourProps: { id: v, "aria-hidden": !0, onClick: g }, theirProps: h, slot: { open: c.dialogState.value === 0 }, attrs: u, slots: i, name: "DialogOverlay" });
  };
} });
ft({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${In()}` } }, inheritAttrs: !1, setup(r, { attrs: u, slots: i, expose: c }) {
  let g = Ar("DialogBackdrop"), v = ie(null);
  return c({ el: v, $el: v }), et(() => {
    if (g.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: h, ...b } = r, A = { id: h, ref: v, "aria-hidden": !0 };
    return Ze(Jl, { force: !0 }, () => Ze(ds, () => yt({ ourProps: A, theirProps: { ...u, ...b }, slot: { open: g.dialogState.value === 0 }, attrs: u, slots: i, name: "DialogBackdrop" })));
  };
} });
ft({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${In()}` } }, setup(r, { attrs: u, slots: i, expose: c }) {
  let g = Ar("DialogPanel");
  c({ el: g.panelRef, $el: g.panelRef });
  function v(h) {
    h.stopPropagation();
  }
  return () => {
    let { id: h, ...b } = r, A = { id: h, ref: g.panelRef, onClick: v };
    return yt({ ourProps: A, theirProps: b, slot: { open: g.dialogState.value === 0 }, attrs: u, slots: i, name: "DialogPanel" });
  };
} });
let X1 = ft({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${In()}` } }, setup(r, { attrs: u, slots: i }) {
  let c = Ar("DialogTitle");
  return et(() => {
    c.setTitleId(r.id), wn(() => c.setTitleId(null));
  }), () => {
    let { id: g, ...v } = r;
    return yt({ ourProps: { id: g }, theirProps: v, slot: { open: c.dialogState.value === 0 }, attrs: u, slots: i, name: "DialogTitle" });
  };
} });
function Z1(r) {
  let u = { called: !1 };
  return (...i) => {
    if (!u.called)
      return u.called = !0, r(...i);
  };
}
function Kl(r, ...u) {
  r && u.length > 0 && r.classList.add(...u);
}
function pi(r, ...u) {
  r && u.length > 0 && r.classList.remove(...u);
}
var ta = ((r) => (r.Finished = "finished", r.Cancelled = "cancelled", r))(ta || {});
function J1(r, u) {
  let i = la();
  if (!r)
    return i.dispose;
  let { transitionDuration: c, transitionDelay: g } = getComputedStyle(r), [v, h] = [c, g].map((b) => {
    let [A = 0] = b.split(",").filter(Boolean).map((_) => _.includes("ms") ? parseFloat(_) : parseFloat(_) * 1e3).sort((_, T) => T - _);
    return A;
  });
  return v !== 0 ? i.setTimeout(() => u("finished"), v + h) : u("finished"), i.add(() => u("cancelled")), i.dispose;
}
function Yo(r, u, i, c, g, v) {
  let h = la(), b = v !== void 0 ? Z1(v) : () => {
  };
  return pi(r, ...g), Kl(r, ...u, ...i), h.nextFrame(() => {
    pi(r, ...i), Kl(r, ...c), h.add(J1(r, (A) => (pi(r, ...c, ...u), Kl(r, ...g), b(A))));
  }), h.add(() => pi(r, ...u, ...i, ...c, ...g)), h.add(() => b("cancelled")), h.dispose;
}
function kn(r = "") {
  return r.split(" ").filter((u) => u.trim().length > 1);
}
let aa = Symbol("TransitionContext");
var Q1 = ((r) => (r.Visible = "visible", r.Hidden = "hidden", r))(Q1 || {});
function ey() {
  return qt(aa, null) !== null;
}
function ty() {
  let r = qt(aa, null);
  if (r === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return r;
}
function ny() {
  let r = qt(ua, null);
  if (r === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return r;
}
let ua = Symbol("NestingContext");
function xi(r) {
  return "children" in r ? xi(r.children) : r.value.filter(({ state: u }) => u === "visible").length > 0;
}
function ms(r) {
  let u = ie([]), i = ie(!1);
  et(() => i.value = !0), wn(() => i.value = !1);
  function c(v, h = bn.Hidden) {
    let b = u.value.findIndex(({ id: A }) => A === v);
    b !== -1 && (Tt(h, { [bn.Unmount]() {
      u.value.splice(b, 1);
    }, [bn.Hidden]() {
      u.value[b].state = "hidden";
    } }), !xi(u) && i.value && (r == null || r()));
  }
  function g(v) {
    let h = u.value.find(({ id: b }) => b === v);
    return h ? h.state !== "visible" && (h.state = "visible") : u.value.push({ id: v, state: "visible" }), () => c(v, bn.Unmount);
  }
  return { children: u, register: g, unregister: c };
}
let gs = yi.RenderStrategy, na = ft({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(r, { emit: u, attrs: i, slots: c, expose: g }) {
  if (!ey() && A1())
    return () => Ze(vs, { ...r, onBeforeEnter: () => u("beforeEnter"), onAfterEnter: () => u("afterEnter"), onBeforeLeave: () => u("beforeLeave"), onAfterLeave: () => u("afterLeave") }, c);
  let v = ie(null), h = ie("visible"), b = te(() => r.unmount ? bn.Unmount : bn.Hidden);
  g({ el: v, $el: v });
  let { show: A, appear: _ } = ty(), { register: T, unregister: B } = ny(), V = { value: !0 }, z = In(), q = { value: !1 }, Ie = ms(() => {
    q.value || (h.value = "hidden", B(z), u("afterLeave"));
  });
  et(() => {
    let G = T(z);
    wn(G);
  }), Bt(() => {
    if (b.value === bn.Hidden && z) {
      if (A && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      Tt(h.value, { hidden: () => B(z), visible: () => T(z) });
    }
  });
  let ye = kn(r.enter), Ue = kn(r.enterFrom), Ee = kn(r.enterTo), fe = kn(r.entered), U = kn(r.leave), xe = kn(r.leaveFrom), F = kn(r.leaveTo);
  et(() => {
    Bt(() => {
      if (h.value === "visible") {
        let G = zt(v);
        if (G instanceof Comment && G.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function N(G) {
    let le = V.value && !_.value, de = zt(v);
    !de || !(de instanceof HTMLElement) || le || (q.value = !0, A.value && u("beforeEnter"), A.value || u("beforeLeave"), G(A.value ? Yo(de, ye, Ue, Ee, fe, ($e) => {
      q.value = !1, $e === ta.Finished && u("afterEnter");
    }) : Yo(de, U, xe, F, fe, ($e) => {
      q.value = !1, $e === ta.Finished && (xi(Ie) || (h.value = "hidden", B(z), u("afterLeave")));
    })));
  }
  return et(() => {
    lt([A], (G, le, de) => {
      N(de), V.value = !1;
    }, { immediate: !0 });
  }), rn(ua, Ie), O1(te(() => Tt(h.value, { visible: Pn.Open, hidden: Pn.Closed }))), () => {
    let { appear: G, show: le, enter: de, enterFrom: $e, enterTo: Vt, entered: Ft, leave: ln, leaveFrom: S, leaveTo: f, ...d } = r;
    return yt({ theirProps: d, ourProps: { ref: v }, slot: {}, slots: c, attrs: i, features: gs, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), ry = na, vs = ft({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(r, { emit: u, attrs: i, slots: c }) {
  let g = ia(), v = te(() => r.show === null && g !== null ? Tt(g.value, { [Pn.Open]: !0, [Pn.Closed]: !1 }) : r.show);
  Bt(() => {
    if (![!0, !1].includes(v.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let h = ie(v.value ? "visible" : "hidden"), b = ms(() => {
    h.value = "hidden";
  }), A = ie(!0), _ = { show: v, appear: te(() => r.appear || !A.value) };
  return et(() => {
    Bt(() => {
      A.value = !1, v.value ? h.value = "visible" : xi(b) || (h.value = "hidden");
    });
  }), rn(ua, b), rn(aa, _), () => {
    let T = ns(r, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), B = { unmount: r.unmount };
    return yt({ ourProps: { ...B, as: "template" }, theirProps: {}, slot: {}, slots: { ...c, default: () => [Ze(ry, { onBeforeEnter: () => u("beforeEnter"), onAfterEnter: () => u("afterEnter"), onBeforeLeave: () => u("beforeLeave"), onAfterLeave: () => u("afterLeave"), ...i, ...B, ...T }, c.default)] }, attrs: {}, features: gs, visible: h.value === "visible", name: "Transition" });
  };
} });
const iy = { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, ly = /* @__PURE__ */ Y("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), ay = { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, uy = { class: "sm:flex sm:items-start" }, oy = /* @__PURE__ */ Y("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "h-6 w-6 text-red-600"
  }, [
    /* @__PURE__ */ Y("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), sy = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, fy = { class: "mt-2" }, dy = ["innerHTML"], cy = { class: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse" }, hy = {
  __name: "DeleteConfirmModal",
  props: {
    open: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    message: {
      type: String,
      default: "Are you sure you want to delete this record?"
    },
    title: {
      type: String,
      default: "Delete"
    },
    buttonName: {
      type: String,
      default: "Delete"
    }
  },
  setup(r) {
    return (u, i) => (I(), Oe(K(vs), {
      as: "template",
      show: r.open
    }, {
      default: Ct(() => [
        ve(K(j1), {
          as: "div",
          class: "fixed z-10 inset-0 overflow-y-auto",
          onClose: i[2] || (i[2] = (c) => r.open = !1)
        }, {
          default: Ct(() => [
            Y("div", iy, [
              ve(K(na), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: Ct(() => [
                  ve(K(Y1), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                ]),
                _: 1
              }),
              ly,
              ve(K(na), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              }, {
                default: Ct(() => [
                  Y("div", ay, [
                    Y("div", uy, [
                      oy,
                      Y("div", sy, [
                        ve(K(X1), {
                          as: "h3",
                          class: "text-lg leading-6 font-medium text-gray-900"
                        }, {
                          default: Ct(() => [
                            Lt(Ce(r.title), 1)
                          ]),
                          _: 1
                        }),
                        Y("div", fy, [
                          Y("p", {
                            class: "text-sm text-gray-500",
                            innerHTML: r.message
                          }, null, 8, dy)
                        ])
                      ])
                    ]),
                    Y("div", cy, [
                      Y("button", {
                        type: "button",
                        class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
                        onClick: i[0] || (i[0] = (c) => u.$emit("destroy"))
                      }, Ce(r.buttonName), 1),
                      Y("button", {
                        type: "button",
                        class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm",
                        onClick: i[1] || (i[1] = (c) => u.$emit("close")),
                        ref: "cancelButtonRef"
                      }, "Cancel", 512)
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["show"]));
  }
}, py = {
  __name: "DeleteForm",
  setup(r) {
    const u = ie(!1);
    return (i, c) => (I(), W("div", null, [
      ve(mi, {
        onClick: c[0] || (c[0] = Ve((g) => u.value = !0, ["prevent"])),
        context: "btn-red"
      }, {
        default: Ct(() => [
          Lt(" Delete ")
        ]),
        _: 1
      }),
      ve(hy, {
        open: u.value,
        onDestroy: c[1] || (c[1] = (g) => i.$emit("destroy")),
        onClose: c[2] || (c[2] = (g) => u.value = !1)
      }, null, 8, ["open"])
    ]));
  }
}, my = { class: "bg-white border shadow-md sm:rounded-md" }, gy = { class: "text-lg font-medium leading-6 text-gray-800" }, vy = {
  key: 0,
  class: "mt-1 text-sm text-gray-500"
}, yy = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-green-200",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, by = /* @__PURE__ */ Y("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), wy = /* @__PURE__ */ Y("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), xy = [
  by,
  wy
], Oy = {
  __name: "ModelForm",
  props: {
    modelValue: {
      type: Object
    },
    loading: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    sections: {
      type: Array,
      default() {
        return [{ title: null }];
      }
    },
    footerClass: {
      type: String
    },
    footerStyle: {
      type: String
    },
    buttonsContainerClass: {
      type: String
    },
    cancelAction: {
      type: Function
    },
    cancelUrl: {
      type: String
    },
    cancelName: {
      type: String,
      default: "Cancel"
    },
    submitName: {
      type: String,
      default: "Save"
    },
    submitDisabled: {
      type: Boolean,
      default: !1
    },
    hideCancel: {
      type: Boolean,
      default: !1
    },
    hideDelete: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["submit", "destroy", "update:modelValue"],
  setup(r, { emit: u }) {
    const i = r;
    te({
      get() {
        return i.modelValue;
      },
      set(v) {
        u("update:modelValue", v);
      }
    });
    function c() {
      u("submit", i.modelValue);
    }
    function g() {
      u("destroy", i.modelValue);
    }
    return lt(
      () => i.modelValue.errors,
      (v) => {
        for (let h = 0; h < i.sections.length; h++)
          i.sections[h].model && (i.sections[h].model.errors = v);
      },
      { deep: !0 }
    ), (v, h) => (I(), W("section", my, [
      (I(!0), W($t, null, Wt(r.sections, (b, A) => (I(), W("div", {
        class: qe(["p-6 space-y-6 border-b-2", b.class]),
        style: jl(b.style)
      }, [
        b.title ? (I(), W("div", {
          key: 0,
          class: qe(b.headerClass)
        }, [
          Y("h3", gy, Ce(b.title), 1),
          b.description ? (I(), W("p", vy, Ce(b.description), 1)) : ge("", !0)
        ], 2)) : ge("", !0),
        Y("div", {
          class: qe(b.bodyClass)
        }, [
          Fe(v.$slots, `beforeGroupSection${A}`),
          ve(g1, {
            form: b.model ?? r.modelValue,
            inputs: b.inputs,
            class: qe(b.inputGroupClass),
            "indicate-required": b.indicateRequired
          }, null, 8, ["form", "inputs", "class", "indicate-required"]),
          Fe(v.$slots, `afterGroupSection${A}`)
        ], 2)
      ], 6))), 256)),
      Y("div", {
        class: qe(["px-6 py-3 bg-gray-100 text-right rounded-b flex items-center", r.footerClass]),
        style: jl(r.footerStyle)
      }, [
        Fe(v.$slots, "footer"),
        Y("div", {
          class: qe(["flex-1 flex justify-end", r.buttonsContainerClass])
        }, [
          !r.hideDelete && r.modelValue.id ? (I(), Oe(py, {
            key: 0,
            class: "mr-auto",
            onDestroy: g
          })) : ge("", !0),
          r.cancelAction && !r.hideCancel ? (I(), Oe(mi, {
            key: 1,
            context: "btn-white",
            onClick: Ve(r.cancelAction, ["prevent"])
          }, {
            default: Ct(() => [
              Lt(Ce(r.cancelName), 1)
            ]),
            _: 1
          }, 8, ["onClick"])) : r.hideCancel ? ge("", !0) : (I(), Oe(mi, {
            key: 2,
            type: "link",
            context: "btn-white",
            href: r.cancelUrl ? r.cancelUrl : "javascript:history.back()"
          }, {
            default: Ct(() => [
              Lt(Ce(r.cancelName), 1)
            ]),
            _: 1
          }, 8, ["href"])),
          ve(mi, {
            class: "ml-4 flex",
            context: "btn-primary",
            disabled: r.loading || r.submitDisabled,
            onClick: c
          }, {
            default: Ct(() => [
              r.loading ? (I(), W("svg", yy, xy)) : ge("", !0),
              Lt(" " + Ce(r.submitName), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 2)
      ], 6)
    ]));
  }
};
export {
  m1 as FormInput,
  g1 as FormInputGroup,
  p1 as InputControl,
  Oy as ModelForm
};
