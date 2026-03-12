import{r as m,f as l,j as t}from"./iframe-hjgHldhA.js";import{S as d}from"./SearchField-DA1EoGaL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CYf5-OmU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-p8oWdHew.js";import"./utils-B2oy_Akv.js";import"./useLocalizedStringFormatter-QPyrmh33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-N8eQEtzs.js";import"./useFocusRing-DGqM0imy.js";import"./index-wWqPkfY9.js";import"./index-CZGdFrnq.js";import"./useFormValidation-CpAXD96F.js";import"./useField-CXw-Mbui.js";import"./Button-DdHA5O9n.js";import"./Hidden-CkBT3eQL.js";import"./useLabels-BUpPlZ0t.js";import"./useButton-3e8Qen6j.js";import"./search-gKw6hHd7.js";import"./createLucideIcon-DxWbUO7j.js";import"./ClearButton-gqP1pVXK.js";import"./x-DBeRfKB2.js";import"./Button-D4ayGKxz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-qYAAoSTQ.js";import"./VisuallyHidden-pF8Dh8C_.js";import"./FieldError-DyNIXA91.js";import"./Text-C-W1MFmh.js";import"./Text-BGjvDqqs.js";import"./RSPContexts-BCs-XGXW.js";import"./Collection-BUI2UZ4s.js";import"./index-CcKajqZL.js";import"./DragAndDrop-C627yhdd.js";import"./getScrollParent-BME3aSxN.js";import"./scrollIntoView-BEdUUvdG.js";import"./SelectionIndicator-CcgAMD0V.js";import"./SelectionManager-CJ1TE6-Q.js";import"./useEvent-mNSED06z.js";import"./useDescription-g6-DJmWb.js";import"./inertValue-DE1DH4a5.js";import"./useHighlightSelectionDescription-A9OgecHo.js";import"./useUpdateEffect-8S09KqOP.js";import"./ListKeyboardDelegate-CjrSiomx.js";import"./useHasTabbableChild-C7C--aia.js";import"./Checkbox-B-WguI0S.js";import"./Form-B6NlaSyc.js";import"./check-HtAUU4EO.js";import"./useToggleState-Berun3jW.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
