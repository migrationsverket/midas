import{r as m,f as l,j as t}from"./iframe-FULtcQ5y.js";import{S as d}from"./SearchField-DssVYais.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CU-L_eDs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-b-x_Bn66.js";import"./utils-BZWW7WJA.js";import"./useLocalizedStringFormatter-CzRjru41.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIp1oEBQ.js";import"./useFocusRing-Cf9gdL2X.js";import"./index-DZLJKQEi.js";import"./index-DEQebrT3.js";import"./useFormValidation-C9QOJ6L1.js";import"./useField-N9zIyGWG.js";import"./Button-D0gHO-KH.js";import"./Hidden-DwNxrma0.js";import"./useLabels-0cbaIQ_Y.js";import"./useButton-Okn-2P08.js";import"./search-Dtg93v53.js";import"./createLucideIcon-rSkXk1i2.js";import"./ClearButton-DTc6R1cW.js";import"./Button-C3cOR8o0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DRhb472R.js";import"./VisuallyHidden-BAXKzm-M.js";import"./x-Dw0QuZBZ.js";import"./FieldError-C797vA19.js";import"./Text-DnzX-OyP.js";import"./Text-Ccs4qaSZ.js";import"./RSPContexts-DakiloPX.js";import"./Collection-DhJEN3cp.js";import"./index-RRdF-DV5.js";import"./DragAndDrop-B-QgNyvK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5fKujRu.js";import"./SelectionManager-fkm3gmUA.js";import"./useEvent-zOk05Ty3.js";import"./useDescription-B6nXjKiy.js";import"./inertValue-CYJLr5AG.js";import"./useHighlightSelectionDescription-Ds0K4A0E.js";import"./useUpdateEffect-M02V7yMX.js";import"./ListKeyboardDelegate-BgoZQiFu.js";import"./useHasTabbableChild-BIklKE0K.js";import"./Checkbox-Dfv8E6To.js";import"./Form-D8Z9-zNv.js";import"./check-UBo99_A9.js";import"./useToggleState-BWdXZANR.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
