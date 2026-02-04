import{r as m,f as l,j as t}from"./iframe-BUlYeenf.js";import{S as d}from"./SearchField-BLRAXIpb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-R-qWBt60.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BQ1_hIib.js";import"./utils-lHsRwqJp.js";import"./useLocalizedStringFormatter-CZUMuckE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-X3JUxu3r.js";import"./useFocusRing-CviEpoWZ.js";import"./index-DGEIcEWR.js";import"./index-DmdJ6ljJ.js";import"./useFormValidation-CNOyznno.js";import"./useField-BhMTZZgY.js";import"./Button-CAFxmTKU.js";import"./Hidden-xA7wwpGq.js";import"./useLabels-BwlyzcSz.js";import"./useButton-BwVzS7tb.js";import"./search-8dp5fTMG.js";import"./createLucideIcon-D-YObSxS.js";import"./ClearButton-Cj3952G9.js";import"./Button-atNiNEsO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B7ud72d9.js";import"./VisuallyHidden-BE5YEdq7.js";import"./x-DgqlYmTg.js";import"./FieldError-BuLprRq1.js";import"./Text-BEqbNabF.js";import"./Text-Bcb19OuN.js";import"./RSPContexts-DyT-IAgl.js";import"./Collection-DXOyl8IL.js";import"./index-BFmyVk_-.js";import"./DragAndDrop-DnHN8ilv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cb7FhzC-.js";import"./SelectionManager-BveSUUx6.js";import"./useEvent-qyTooRJj.js";import"./useDescription-DtuYr6PG.js";import"./inertValue-CjYoKEqg.js";import"./useHighlightSelectionDescription-fFOTc5sW.js";import"./useUpdateEffect-CvDWD5lc.js";import"./ListKeyboardDelegate-MnX_BZtB.js";import"./useHasTabbableChild-OWV-aIQT.js";import"./Checkbox-DmdUMtGs.js";import"./Form-B0C8SxTV.js";import"./check-DGU0oFUw.js";import"./useToggleState-j0MKMOtt.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
