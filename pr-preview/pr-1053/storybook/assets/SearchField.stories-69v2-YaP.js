import{r as m,f as l,j as t}from"./iframe-CY7earj9.js";import{S as d}from"./SearchField-CPEezjKA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DUJya6X7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CGlYRVEE.js";import"./utils-BHj0WwlJ.js";import"./useLocalizedStringFormatter-CXnWH6sO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DR4DnHU_.js";import"./useFocusRing-D0zrayrq.js";import"./index-BMlkIDuL.js";import"./index-DvjoN402.js";import"./useFormValidation-jQfUv7M_.js";import"./useField-B15zj1Pl.js";import"./Button-Cn9gwPsg.js";import"./Hidden-BWeB5vvs.js";import"./useLabels-B26E6Lmi.js";import"./useButton-D33c8uF-.js";import"./search-B6sjDsSw.js";import"./createLucideIcon-_3e5Batb.js";import"./ClearButton-BK8-3o5i.js";import"./Button-DqjjUYYg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CYqH8VQ7.js";import"./VisuallyHidden-BYqRYUAd.js";import"./x-CXFUVrZJ.js";import"./FieldError-X9ojGEW-.js";import"./Text-DDkXBPqL.js";import"./Text-DEbe6_kr.js";import"./RSPContexts-BRbL19jn.js";import"./Collection-CNEjLfJN.js";import"./index-Bz5K3veL.js";import"./DragAndDrop-C0uTsadx.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-HcaYXDj8.js";import"./SelectionManager-HfXsibpp.js";import"./useEvent-BmzvquLD.js";import"./useDescription-B3ZL4MTY.js";import"./inertValue-BW2krgRG.js";import"./useHighlightSelectionDescription-CxA1fGZq.js";import"./useUpdateEffect-BzkTYok2.js";import"./ListKeyboardDelegate-Bo1XGjsK.js";import"./useHasTabbableChild-ExvsgqLY.js";import"./Checkbox-BqbQc3ee.js";import"./Form-BY9kSmc9.js";import"./check-CPvnX8tP.js";import"./useToggleState-BwuluaqD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
