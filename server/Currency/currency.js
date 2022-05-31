import axios from "axios"

function parseXmlToJson(xml) {
  const json = {};
  
  for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
  
  const key = res[1] || res[3];
  const value = res[2] && parseXmlToJson(res[2]);
  json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;
  
  }
  
  return json;
  
  }

let currency ;

const getConversions = async () => {

// get data form BNR XML file
const { data } = await axios.get('https://www.bnr.ro/nbrfxrates.xml')


const json = parseXmlToJson(data

// remove all spaces
.replaceAll('\r', '')

// remove all end line
.replaceAll('\n', '')

// remove all spaces
.replaceAll('\t', '')

// remap <Rate currency="CUR">value</Rate> to <CUR>value</CUR>
.replaceAll(/<(\w+) (\w+)="(\w+)">([0-9.]*)<\/(\w+)>/g, '<$3>$4</$3>'))

currency = {
  USD : json.DataSet.Body.Cube.USD,
  EURO :json.DataSet.Body.Cube.EUR  
}

return currency;

}
let currencyFinal=await getConversions()
setTimeout(() => {
  getConversions()
}, 24 * 1000 * 60 * 60)



export const getCurrency=(req,res)=>{

  res.send(currencyFinal)

}



