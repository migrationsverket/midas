import{r as m,f as l,j as t}from"./iframe-qA047as2.js";import{S as d}from"./SearchField-BmnAzw8e.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BUdoTH9L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BqDoX1oC.js";import"./utils-CnePkaRa.js";import"./useLocalizedStringFormatter-4TG4W5do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DIlc45TP.js";import"./useFocusRing-No8xSroW.js";import"./index-BDL1KNLx.js";import"./index-DVFaELLp.js";import"./useFormValidation-D9d090zr.js";import"./useField-Dbbo2A5n.js";import"./Button-CDa9hyQV.js";import"./Hidden-74NDefsp.js";import"./useLabels-BED0MCXy.js";import"./useButton-ZFa7mm27.js";import"./search-DvKlIuQH.js";import"./createLucideIcon-Bdodb09A.js";import"./ClearButton-BXL9tuuI.js";import"./Button-IkqPRuS8.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BEiZ3BMs.js";import"./VisuallyHidden-BNz_8c2V.js";import"./x-DPER_DtP.js";import"./FieldError-aeuP4CDb.js";import"./Text-DZAVuivT.js";import"./Text-CzZwSmIU.js";import"./RSPContexts-DtyC-LdE.js";import"./Collection-Dh4VjxAz.js";import"./index-BHvREsci.js";import"./DragAndDrop-DONqxPZ7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5C--0__.js";import"./SelectionManager-BNHHveg4.js";import"./useEvent-DpQSoI-M.js";import"./useDescription-3SukAPA1.js";import"./inertValue-BKnpHwDp.js";import"./useHighlightSelectionDescription-C6_LkgF2.js";import"./useUpdateEffect-jy8bY0cv.js";import"./ListKeyboardDelegate-BydgnHxR.js";import"./useHasTabbableChild-DT8W0oWL.js";import"./Checkbox-BcQ5NfC3.js";import"./Form-Cacq4RkI.js";import"./check-DgomVN7j.js";import"./useToggleState-C8g4NIu8.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
