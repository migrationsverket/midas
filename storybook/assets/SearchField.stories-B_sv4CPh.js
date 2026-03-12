import{r as m,f as l,j as t}from"./iframe-D3WYY-Ai.js";import{S as d}from"./SearchField-BC0NBtMM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CodtJt48.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bp5n3e-O.js";import"./utils-o1ARpK5H.js";import"./useLocalizedStringFormatter-Dtt9NC--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B62mJzTd.js";import"./useFocusRing-BMUWt-Rd.js";import"./index-BB82YbIc.js";import"./index-CjRvgmYY.js";import"./useFormValidation-Ba7VXFWU.js";import"./useField-ChV84leN.js";import"./Button-tr2fIea8.js";import"./Hidden-DKj3_QtK.js";import"./useLabels-_oHB6RBX.js";import"./useButton-CjQiPJKb.js";import"./search-DoqaZLsy.js";import"./createLucideIcon-B7GA4VP9.js";import"./ClearButton-CPeLHtLt.js";import"./x-BPH0GLJj.js";import"./Button-DNgVoL5M.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-m_o1fVtk.js";import"./VisuallyHidden-kDFIOMHt.js";import"./FieldError-C9wlfJJH.js";import"./Text-BhwLGGZ9.js";import"./Text-C1vqtxX1.js";import"./RSPContexts-eW0iJSmp.js";import"./Collection-DTEIflro.js";import"./index-CAYDZGB0.js";import"./DragAndDrop-B_eK9ov1.js";import"./getScrollParent-CKtVlEpI.js";import"./scrollIntoView-DlV6Y38B.js";import"./SelectionIndicator-UMZFYIdR.js";import"./SelectionManager-DC6SlSh9.js";import"./useEvent--3HdY_tz.js";import"./useDescription-B3ZOGkyf.js";import"./inertValue-Dqfsb8uq.js";import"./useHighlightSelectionDescription-BCg8xZD6.js";import"./useUpdateEffect-BFs1Rl-B.js";import"./ListKeyboardDelegate-ZfyFr06B.js";import"./useHasTabbableChild-C8dtRQrU.js";import"./Checkbox-CYGnsL3i.js";import"./Form-neu3gbFu.js";import"./check-BBipx3dC.js";import"./useToggleState-drBCb1xT.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
