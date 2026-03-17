import{r as m,f as l,j as t}from"./iframe-T-9iVXG3.js";import{S as d}from"./SearchField-DsTDIK2s.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-5dkfHukw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BoI1WaNw.js";import"./utils-B3genDNz.js";import"./useLocalizedStringFormatter-xdS-2W0d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MoqdZUk0.js";import"./useFocusRing-BDfuXA1K.js";import"./index-B-KcomW3.js";import"./index-DLcbmtBd.js";import"./useFormValidation-Dv3Ujp-e.js";import"./useField-CtRZfu8w.js";import"./Button-C-dW1ric.js";import"./Hidden-gSpfVWl-.js";import"./useLabels-CRqI88gG.js";import"./useButton-D49MhIWL.js";import"./search-DVchn_o-.js";import"./createLucideIcon-qLu_u4fs.js";import"./ClearButton-DnKB6xkO.js";import"./x-Cs-J8gEx.js";import"./Button-LHNpYI0v.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-WowMA0AY.js";import"./VisuallyHidden-CO4c4_3Y.js";import"./FieldError-B3mWOyJN.js";import"./Text-B_uJS0BB.js";import"./Text-DqB5EYwf.js";import"./RSPContexts-BPLMbvFf.js";import"./Collection-MsEGC5KJ.js";import"./index-18etiPbY.js";import"./DragAndDrop-dvIdjJjm.js";import"./getScrollParent-CRP0whSm.js";import"./scrollIntoView-iro7z2eq.js";import"./SelectionIndicator-mJeJ2J_z.js";import"./SelectionManager-CA4lF0s6.js";import"./useEvent-D56kyFzf.js";import"./useDescription-DqYEfudQ.js";import"./inertValue-X91YVdJX.js";import"./useHighlightSelectionDescription-B1EL2dmZ.js";import"./useUpdateEffect-DZYmQNNv.js";import"./ListKeyboardDelegate-DHb2U1Ph.js";import"./useHasTabbableChild-DtWVMXGq.js";import"./Checkbox-3rG8fIkx.js";import"./Form-DQl3-hlb.js";import"./check-D56MuOhO.js";import"./useToggleState-DB0Wpnkv.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
