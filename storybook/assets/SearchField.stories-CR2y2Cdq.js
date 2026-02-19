import{r as m,f as l,j as t}from"./iframe-D6sKX6II.js";import{S as d}from"./SearchField-5S0OR6Jh.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DrqzAxrS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-lIXa58Dk.js";import"./utils-C4RQL2_3.js";import"./useLocalizedStringFormatter-CWLwTKjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DiqMn53V.js";import"./useFocusRing-CSkB88rB.js";import"./index-DKBJrd3a.js";import"./index-DDUPyWG3.js";import"./useFormValidation-Bj3o2lyS.js";import"./useField-2xmZNmwq.js";import"./Button-BaCPfcFA.js";import"./Hidden-DGXb4i6s.js";import"./useLabels-Eanys-W7.js";import"./useButton-QkYGdCiT.js";import"./search-B-iCbuml.js";import"./createLucideIcon-sDHC6FPE.js";import"./ClearButton-DMpEQ6R3.js";import"./Button-DCKGBAMV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CajHjEjY.js";import"./VisuallyHidden-D9YxITQY.js";import"./x-2XwCJpa2.js";import"./FieldError-Bvl7FuR6.js";import"./Text-BrckZ8Xv.js";import"./Text-jsf--eUF.js";import"./RSPContexts-DvpaVa_O.js";import"./Collection-D2vS0JJK.js";import"./index-UPahk6AO.js";import"./DragAndDrop-Bm03oYWM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BuDLJhSH.js";import"./SelectionManager-Bng19qqy.js";import"./useEvent-DGV7xSYV.js";import"./useDescription-kimTwMt1.js";import"./inertValue-DDIbgMkM.js";import"./useHighlightSelectionDescription-aQO4yv39.js";import"./useUpdateEffect-jRDz-o72.js";import"./ListKeyboardDelegate-Cx41C5kb.js";import"./useHasTabbableChild-ComoWpwq.js";import"./Checkbox-CXHOTFSU.js";import"./Form-C2GRFxHm.js";import"./check-DAl-Lpzb.js";import"./useToggleState-Bi0UME5t.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
