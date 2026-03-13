import{r as m,f as l,j as t}from"./iframe-DNJYs6qz.js";import{S as d}from"./SearchField-CQEZE-SM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dlb11zB7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CtAp0QIN.js";import"./utils-aX0iHzRl.js";import"./useLocalizedStringFormatter-CFHnDqzL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B8P53YXq.js";import"./useFocusRing-CX_Euf5u.js";import"./index-DAO1nJ__.js";import"./index--Rga-YK_.js";import"./useFormValidation-0nAA1zAL.js";import"./useField-CxoJpysk.js";import"./Button-CZyV5Mpk.js";import"./Hidden-CpGOqaLl.js";import"./useLabels-3Hv0LYEO.js";import"./useButton-W-teLibw.js";import"./search-Bu3j4iqV.js";import"./createLucideIcon-BSLbnE3k.js";import"./ClearButton-CLiksIjR.js";import"./x-4zOHDniK.js";import"./Button-DOGWCVYm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CUnRcS0k.js";import"./VisuallyHidden-BjCBN869.js";import"./FieldError-BrrWeg-t.js";import"./Text-DnOEsXYA.js";import"./Text-DlzD_a6_.js";import"./RSPContexts-BQ-Rh700.js";import"./Collection-BM28iyKb.js";import"./index-Bp3s1rJf.js";import"./DragAndDrop-YEwd4FEC.js";import"./getScrollParent-B8wVHIEy.js";import"./scrollIntoView-D1v9x2ju.js";import"./SelectionIndicator-CZ_49dW3.js";import"./SelectionManager-CQdEZCxu.js";import"./useEvent-Z2WvN-8m.js";import"./useDescription-Dmw9BzGw.js";import"./inertValue-DO1jxgHR.js";import"./useHighlightSelectionDescription-BlTNNsRc.js";import"./useUpdateEffect-7gkf_X-9.js";import"./ListKeyboardDelegate-CVvGU0Ro.js";import"./useHasTabbableChild-CrFLDuiJ.js";import"./Checkbox-BsUFjK-S.js";import"./Form-DEinUDSu.js";import"./check-CDnPX4pk.js";import"./useToggleState-Da3tRynG.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
