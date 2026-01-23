import{r as m,f as l,j as t}from"./iframe-CAxX8b8z.js";import{S as d}from"./SearchField-nraI57JZ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BLbkpICD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CrLblIfK.js";import"./utils-DCHF2L9h.js";import"./useLocalizedStringFormatter-CTDPvKwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUDeOcF8.js";import"./useFocusRing-CJGxaojv.js";import"./index-BFL8txhV.js";import"./index-BsUamICG.js";import"./useFormValidation-ORBzuIse.js";import"./useField-BJlVD6tn.js";import"./Button-4YWHHaEC.js";import"./Hidden-BhCMtZNx.js";import"./useLabels-DOCuV8eN.js";import"./useButton-pswNsnH0.js";import"./search-DAviJlAA.js";import"./createLucideIcon-Btl_k1Dg.js";import"./ClearButton-D6ram10f.js";import"./Button-hIWv77LG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ck8_EjzN.js";import"./VisuallyHidden-BxgXzkUT.js";import"./x-DFKddAaY.js";import"./FieldError-D4Sp8V1Y.js";import"./Text-BLQTNCsN.js";import"./Text-D4pRrquR.js";import"./RSPContexts-DSQBOyK1.js";import"./Collection-CHE2qNUL.js";import"./index-hoFEFN5M.js";import"./DragAndDrop-DdukEe81.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cned-ECi.js";import"./SelectionManager-BNvdJXY_.js";import"./useEvent-Be56k_0k.js";import"./useDescription-DlwMEBen.js";import"./inertValue-BwvQc4cI.js";import"./useHighlightSelectionDescription-BQS_BZAt.js";import"./useUpdateEffect-QZnmbQ41.js";import"./ListKeyboardDelegate-DzMoo9Rf.js";import"./useHasTabbableChild-UWF1RhYD.js";import"./Checkbox-DcvZFmA4.js";import"./Form-DdIW8y_X.js";import"./check-97dXLU_3.js";import"./useToggleState-Cnp3jxxW.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
