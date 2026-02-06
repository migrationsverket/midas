import{r as m,f as l,j as t}from"./iframe-C_0qThD6.js";import{S as d}from"./SearchField-DutWZTRC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D7mGbJ0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DErGdLYP.js";import"./utils-bnb8b6bb.js";import"./useLocalizedStringFormatter-C4FXgmdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-bQA4fmUY.js";import"./useFocusRing-DfupDaWX.js";import"./index-BSnKqic_.js";import"./index-CPoNMQTv.js";import"./useFormValidation-_flSi_SL.js";import"./useField-NVSHVjO7.js";import"./Button-B_Hp7nF_.js";import"./Hidden-Btf5vQwa.js";import"./useLabels-05vWhTwh.js";import"./useButton-DiIDLtaM.js";import"./search-yaXDnbSe.js";import"./createLucideIcon-CC2FZLZA.js";import"./ClearButton-BK67-cYL.js";import"./Button-DqbGeqrs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQjkICgF.js";import"./VisuallyHidden-pXLJ5Ug_.js";import"./x-BsH9rdWs.js";import"./FieldError-CqD9H87d.js";import"./Text-CKF9tCug.js";import"./Text-Due48UAx.js";import"./RSPContexts-CF-RUooF.js";import"./Collection-8BQnlDdc.js";import"./index-LWMPJS4z.js";import"./DragAndDrop-CK9UAJft.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BD2rQtLe.js";import"./SelectionManager-DWtY7fd0.js";import"./useEvent-Bc3qbCgw.js";import"./useDescription-DCtBRw9v.js";import"./inertValue-DhuLV4Jo.js";import"./useHighlightSelectionDescription-CxCjLjSX.js";import"./useUpdateEffect-Ccqp90AI.js";import"./ListKeyboardDelegate-BTX2vjTk.js";import"./useHasTabbableChild-CV4WHckA.js";import"./Checkbox-Blc_OSni.js";import"./Form-CP8dFFLN.js";import"./check-C3APs3wq.js";import"./useToggleState-CXK8mjZu.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
