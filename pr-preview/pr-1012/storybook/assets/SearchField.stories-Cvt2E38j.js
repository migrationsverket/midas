import{r as m,f as l,j as t}from"./iframe-qoW9tZaT.js";import{S as d}from"./SearchField-Cos2t7O1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Djm_4fgd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C0UVa0XM.js";import"./utils-CTxYHgfD.js";import"./useLocalizedStringFormatter-D4YZU2AG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBwLvLKO.js";import"./useFocusRing-B6LARHo7.js";import"./index-bWzt5b9S.js";import"./index-BiO5NgKw.js";import"./useFormValidation-BnwIZj_P.js";import"./useField-DngBv23z.js";import"./Button-B0Fu5HXr.js";import"./Hidden-BS4srMlH.js";import"./useLabels-B9eAX_KZ.js";import"./useButton-C2Ne_uvp.js";import"./search-y46YhOSF.js";import"./createLucideIcon-BjNk3Fmr.js";import"./ClearButton-CDivmyKW.js";import"./Button-CPAvH5KE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZDYT37P.js";import"./VisuallyHidden-BRq5SFSs.js";import"./x-DguWE13t.js";import"./FieldError-DE19xuEt.js";import"./Text-DwKAJAla.js";import"./Text-CYhV6FXp.js";import"./RSPContexts-DxChSUOo.js";import"./Collection-BVbkFK2L.js";import"./index-C0fhMHrq.js";import"./DragAndDrop-Dk77kdn2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cy56j8FR.js";import"./SelectionManager-zjIT78cX.js";import"./useEvent-DDnu5cND.js";import"./useDescription-5krC5hm9.js";import"./inertValue-Cl9GzEPU.js";import"./useHighlightSelectionDescription-CoRdlbH3.js";import"./useUpdateEffect-DaVeE0I2.js";import"./ListKeyboardDelegate-C967icmU.js";import"./useHasTabbableChild-_i94kGBb.js";import"./Checkbox-7jsngdVH.js";import"./Form-BQeevNnQ.js";import"./check-Cwc62J8M.js";import"./useToggleState-CxwX6hE5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
