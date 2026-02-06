import{r as m,f as l,j as t}from"./iframe-LGxspPPV.js";import{S as d}from"./SearchField-Dw1K2A7N.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CNL1qTix.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFDfEVCT.js";import"./utils-Cvut-P0d.js";import"./useLocalizedStringFormatter-CQTFAgtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dy9QaU12.js";import"./useFocusRing-BY43M_mY.js";import"./index-C7iNh71x.js";import"./index-C5UCf85T.js";import"./useFormValidation-sbqd_MHR.js";import"./useField-bjJPXifQ.js";import"./Button-BeadT2wH.js";import"./Hidden-CyYWm6Yz.js";import"./useLabels-VT28YHfM.js";import"./useButton-CKdCQ7hH.js";import"./search-DKzdiquv.js";import"./createLucideIcon-C9JZLtu2.js";import"./ClearButton-CO1eEyDV.js";import"./Button-ymzgBHTs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Db9FNN9a.js";import"./VisuallyHidden-5rvqsSwz.js";import"./x-CGRcy9or.js";import"./FieldError-BPxM1yn6.js";import"./Text-DPh2uykP.js";import"./Text-BuitjwDy.js";import"./RSPContexts-q3zVRbuY.js";import"./Collection-DAcEpYBW.js";import"./index-DiMhFFci.js";import"./DragAndDrop-CESGS0ja.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeBS24gl.js";import"./SelectionManager-TUE9aup5.js";import"./useEvent-BlC1y27u.js";import"./useDescription-CBkQwsB3.js";import"./inertValue-DdkeRUmc.js";import"./useHighlightSelectionDescription-BIVMJN0I.js";import"./useUpdateEffect-Bt4DyFik.js";import"./ListKeyboardDelegate-nZy2cU_V.js";import"./useHasTabbableChild-CeJ1UNWB.js";import"./Checkbox-BC5UhSXV.js";import"./Form-B52WwzME.js";import"./check-BRBKREtE.js";import"./useToggleState-D3GiI-ZH.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
