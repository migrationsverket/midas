import{r as m,f as l,j as t}from"./iframe-BBs4_N6h.js";import{S as d}from"./SearchField-Cv9_l3-R.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BsPc1KBp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjCb2bRF.js";import"./utils-DQWEvmcK.js";import"./useLocalizedStringFormatter-CAgc08WU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ck-lkHHw.js";import"./useFocusRing-C2UWZwX7.js";import"./index-DSf7Rq9d.js";import"./index-DgjA7sBY.js";import"./useFormValidation-D4vZGBVx.js";import"./useField-KR56YyQD.js";import"./Button-Xr6dJxVX.js";import"./Hidden-Vg2S_tOJ.js";import"./useLabels-2mnglK4H.js";import"./useButton-C_pkSc3R.js";import"./search-Dzq7FRSS.js";import"./createLucideIcon-qvf3G-BL.js";import"./ClearButton-CewHEwO0.js";import"./Button-Bf3i2B3M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYezl8xZ.js";import"./VisuallyHidden-DBQc_FBH.js";import"./x-DCZtPpro.js";import"./FieldError-BhhOnxLS.js";import"./Text-Docz9roa.js";import"./Text-DQhNGrME.js";import"./RSPContexts-BwJ1wfP5.js";import"./Collection-CmVXJPau.js";import"./index-C_ERSOhL.js";import"./DragAndDrop-BpqKMJNH.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNOtdENK.js";import"./SelectionManager-ChFtDhyR.js";import"./useEvent-Ca5WwQl8.js";import"./useDescription-C5nfsD6n.js";import"./inertValue-B4E_ecjt.js";import"./useHighlightSelectionDescription-DDbjtlus.js";import"./useUpdateEffect-CCKcSMma.js";import"./ListKeyboardDelegate-DJHvgrIs.js";import"./useHasTabbableChild-O9UZS3mx.js";import"./Checkbox-DOC-wkrj.js";import"./Form-Cwh0R2Gl.js";import"./check-DeU2vXgh.js";import"./useToggleState-Czx7m8Pg.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
