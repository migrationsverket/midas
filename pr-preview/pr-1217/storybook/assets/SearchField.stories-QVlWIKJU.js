import{r as m,f as l,j as t}from"./iframe-BHERtVNf.js";import{S as d}from"./SearchField-gN-68iTv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DYaNuf4N.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CTHX7231.js";import"./clsx-B-dksMZM.js";import"./Form-DIUWLB30.js";import"./useFocusRing-BHPpscSH.js";import"./index-DZ_I24z0.js";import"./index-BtFyGPoM.js";import"./Input-KqWw1B45.js";import"./Hidden-Bbawj_lw.js";import"./Button-CWn0VMRl.js";import"./useLabel-BYlWZT7f.js";import"./useLabels-C7V4whMC.js";import"./useButton-DKTwQcCs.js";import"./FieldError-vYppElHh.js";import"./Text-CRbS9uup.js";import"./clsx-Ciqy0D92.js";import"./Text-DnQ_ETrR.js";import"./RSPContexts-CoVebu3O.js";import"./Group-BJap8_sO.js";import"./useControlledState-7jxNesIu.js";import"./useLocalizedStringFormatter-3lDJzaW9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CoZDJyuF.js";import"./useField-Dlh-JQOe.js";import"./TextField.module-DdivwlC8.js";import"./search-BvIJ5fbt.js";import"./createLucideIcon-DvoPQrFJ.js";import"./x-BjG60dSq.js";import"./useLocalizedStringFormatter-MqTPcr_q.js";import"./Button-sL8xP2zY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CotPfbgC.js";import"./Collection-D0fOj4je.js";import"./index-Dhz1B7N1.js";import"./DragAndDrop-CCX9MXM9.js";import"./getScrollParent-BOdzDoXv.js";import"./scrollIntoView-leVCW1jO.js";import"./SelectionIndicator-jZd3bly_.js";import"./SelectionManager-Chg_m2pk.js";import"./useEvent-uROvjphs.js";import"./useDescription-DMqZJTlw.js";import"./inertValue-DUejdioa.js";import"./useHighlightSelectionDescription-ClAIqfvx.js";import"./useUpdateEffect-Cj4-eCYw.js";import"./ListKeyboardDelegate-vyvoSCyk.js";import"./useHasTabbableChild-Cia7ZqaL.js";import"./Checkbox-Dw1JGW6p.js";import"./check-BX8q_Qip.js";import"./useToggleState-I4k8Apil.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
