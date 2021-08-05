<template>
  <div class="autocomplete" style="width:300px;">
    <input
      :id="id"
      v-model="input"
      type="text"
      :name="name"
      :placeholder="placeholder"
      autocomplete="off"
    >
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: {
      type: String,
      default () {
        return '--- Search ---'
      }
    },
    value: { type: String, required: true },
    label: { type: String, required: true },
    dataList: { type: Array, required: true }
  },
  data () {
    return {
    //   countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central Arfrican Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauro', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', { name: 'Pakistan', id: 'id' }, 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre & Miquelon', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Kitts & Nevis', 'St Lucia', 'St Vincent', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      input: ''
    }
  },
  mounted () {
    const self = this
    document.addEventListener('click', function (e) {
      self.closeAllLists(e.target)
    })
    this.autocomplete(document.getElementById(self.id), this.dataList)
  },
  methods: {
    // send () {
    //   // this.$emit('send', this.input)
    // },
    autocomplete (inp, arr) {
      const self = this
      /* the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values: */
      let currentFocus
      /* execute a function when someone writes in the text field: */
      inp.addEventListener('input', function (e) {
        let b; let i; const val = this.value
        /* close any already open lists of autocompleted values */
        self.closeAllLists(e.target)
        if (!val) { return false }
        // self.input = e.target.value
        currentFocus = -1
        /* create a DIV element that will contain the items (values): */
        const a = document.createElement('DIV')
        a.setAttribute('id', this.id + 'autocomplete-list')
        a.setAttribute('class', 'autocomplete-items')
        /* append the DIV element as a child of the autocomplete container: */
        this.parentNode.appendChild(a)
        /* for each item in the array... */
        for (i = 0; i < arr.length; i++) {
          /* check if the item starts with the same letters as the text field value: */
          if (arr[i][self.label].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            /* create a DIV element for each matching element: */
            b = document.createElement('DIV')
            /* make the matching letters bold: */
            b.innerHTML = '<strong>' + arr[i][self.label].substr(0, val.length) + '</strong>'
            b.innerHTML += arr[i][self.label].substr(val.length)
            /* insert a input field that will hold the current array item's value: */
            b.innerHTML += "<input type='hidden' value='" + arr[i][self.label] + "' data-id='" + arr[i].id + "'>"
            /* execute a function when someone clicks on the item value (DIV element): */
            b.addEventListener('click', function (e) {
              // console.log("log: "+arr[i]);
              /* insert the value for the autocomplete text field: */
              inp.value = this.getElementsByTagName('input')[0].value
              self.$emit('selected', this.getElementsByTagName('input')[0].getAttribute('data-id'))
              // console.log(selectedId)
              /* close the list of autocompleted values,
                    (or any other open lists of autocompleted values: */
              self.closeAllLists()
            })
            a.appendChild(b)
          }
        }
      })
      /* execute a function presses a key on the keyboard: */
      inp.addEventListener('keydown', function (e) {
        let x = document.getElementById(this.id + 'autocomplete-list')
        if (x) { x = x.getElementsByTagName('div') }
        if (e.keyCode === 40) {
          /* If the arrow DOWN key is pressed,
                increase the currentFocus variable: */
          currentFocus++
          /* and and make the current item more visible: */
          self.addActive(x)
        } else if (e.keyCode === 38) { // up
          /* If the arrow UP key is pressed,
                decrease the currentFocus variable: */
          currentFocus--
          /* and and make the current item more visible: */
          self.addActive(x)
        } else if (e.keyCode === 13) {
          /* If the ENTER key is pressed, prevent the form from being submitted, */
          e.preventDefault()
          if (currentFocus > -1) {
            /* and simulate a click on the "active" item: */
            if (x) { x[currentFocus].click() }
          }
        }
      })
    },
    addActive (x) {
      const self = this
      /* a function to classify an item as "active": */
      if (!x) { return false }
      /* start by removing the "active" class on all items: */
      self.removeActive(x)
      if (self.currentFocus >= x.length) { self.currentFocus = 0 }
      if (self.currentFocus < 0) { self.currentFocus = (x.length - 1) }
      /* add class "autocomplete-active": */
      x[self.currentFocus].classList.add('autocomplete-active')
    },
    removeActive (x) {
    /* a function to remove the "active" class from all autocomplete items: */
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active')
      }
    },
    closeAllLists (elmnt) {
      const self = this
      /* close all autocomplete lists in the document,
    except the one passed as an argument: */
      const x = document.getElementsByClassName('autocomplete-items')
      for (let i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== self.inp) {
          x[i].parentNode.removeChild(x[i])
        }
      }
    }
  }
}
</script>

<style>
/*the container must be positioned relative:*/
.autocomplete {
  position: relative;
  display: inline-block;
}

input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}

input[type=text] {
  background-color: #f1f1f1;
  width: 100%;
}

input[type=submit] {
  background-color: DodgerBlue;
  color: #fff;
  cursor: pointer;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>
