import{r as m,f as l,j as t}from"./iframe-JdJ-OJm1.js";import{S as d}from"./SearchField-BK8Po9OV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DKW0AuR9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D8NqpIqI.js";import"./utils-96Qmq1tf.js";import"./useLocalizedStringFormatter-1JARTe_X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DVgm_0_v.js";import"./useFocusRing-DO3ZBB6k.js";import"./index-BNPS8vul.js";import"./index-DPgChp4i.js";import"./useFormValidation-BOj7Bfra.js";import"./useField-DgnJ1pPy.js";import"./Button-DZGa_zA9.js";import"./Hidden-DKn4TiUA.js";import"./useLabels-TKpnNBwe.js";import"./useButton-CFkNx72h.js";import"./search-TRQNvbiR.js";import"./createLucideIcon-oTUJ9cxW.js";import"./ClearButton-C90zM0Ji.js";import"./Button-DhPOwdCl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8P-aJlJ.js";import"./VisuallyHidden-Dgod2K5q.js";import"./x-DLZInyov.js";import"./FieldError-BnFcX8Xu.js";import"./Text-DIR17Pu1.js";import"./Text-JWOQbzzd.js";import"./RSPContexts-FHwAvAup.js";import"./Collection-C9if6wGk.js";import"./index-D4irGP9Q.js";import"./DragAndDrop-ujUiE8Yx.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BVMdCOZy.js";import"./SelectionManager-Df6LefBc.js";import"./useEvent-LxIxBIYw.js";import"./useDescription-CQRfVWLt.js";import"./inertValue-DingCnUv.js";import"./useHighlightSelectionDescription-C1HNBJrO.js";import"./useUpdateEffect-CiIfTNPm.js";import"./ListKeyboardDelegate-BLVLGwaI.js";import"./useHasTabbableChild-VRan9TQz.js";import"./Checkbox-BMoUmEOo.js";import"./Form-yrI-dzfw.js";import"./check-0U43-RVh.js";import"./useToggleState-TpWr7m2e.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
