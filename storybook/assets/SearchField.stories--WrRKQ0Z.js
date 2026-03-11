import{r as m,f as l,j as t}from"./iframe-CmqPL-ve.js";import{S as d}from"./SearchField-6ZH__pzO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BL6sMzMp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DSdzAD24.js";import"./utils-SAP-OCBT.js";import"./useLocalizedStringFormatter-B-4EZhTm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField--OhJxVk7.js";import"./useFocusRing-C_UBzR4Z.js";import"./index-D6miHDB-.js";import"./index-BBGo7RoQ.js";import"./useFormValidation-DGYf2tyw.js";import"./useField-CWYy_yBm.js";import"./Button-9NJzBnLU.js";import"./Hidden-C_mQN8s6.js";import"./useLabels-Bi-sZgxK.js";import"./useButton-CQub_DYW.js";import"./search-DzlF7hkU.js";import"./createLucideIcon-s6c-d0_0.js";import"./ClearButton-CU0ltLs2.js";import"./x-B30kXvjA.js";import"./Button-M655P-gZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKe91JX1.js";import"./VisuallyHidden-DSb_BfCD.js";import"./FieldError-6cTdJ_Za.js";import"./Text-DLxMYZ1_.js";import"./Text-9ERWHN0X.js";import"./RSPContexts-DTDiXTQC.js";import"./Collection-CbwnshHz.js";import"./index-CcIX9qGq.js";import"./DragAndDrop-7VxzmNUl.js";import"./getScrollParent-B2JBaajl.js";import"./scrollIntoView-BTl5uiXp.js";import"./SelectionIndicator-D2u8hlxM.js";import"./SelectionManager-K9TuEgi2.js";import"./useEvent-BjnpXFvw.js";import"./useDescription-Sr7ZTB4e.js";import"./inertValue-lZbdQwVl.js";import"./useHighlightSelectionDescription-COSPHx3u.js";import"./useUpdateEffect-dE-F4AkK.js";import"./ListKeyboardDelegate-IMmnH6-v.js";import"./useHasTabbableChild-CvEOtLO0.js";import"./Checkbox-D3Nek3ID.js";import"./Form-UFmVR2TZ.js";import"./check-BMjJeobE.js";import"./useToggleState-DQvz6tXW.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
