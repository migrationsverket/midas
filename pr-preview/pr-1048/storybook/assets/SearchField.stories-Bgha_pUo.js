import{r as m,f as l,j as t}from"./iframe-BooRIkJT.js";import{S as d}from"./SearchField-CbD4Scms.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CM14suwh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BubjIjDe.js";import"./useObjectRef-C69ZsrXw.js";import"./useLocalizedStringFormatter-DhPS3rKr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CPZmhmLY.js";import"./useFocusRing-zUWJjsLd.js";import"./useFocusable-7IfmtKEg.js";import"./index-DuCxnP6U.js";import"./index-DKsPf0BO.js";import"./useFormValidation-C73jfdEu.js";import"./useField-DaTFMrNe.js";import"./Button-BqahGGDP.js";import"./utils-744b8K7d.js";import"./Hidden-KVVrjxXu.js";import"./number-DfkVkf0F.js";import"./useLabels-DEfOhxO2.js";import"./useButton-Dvy7NbEr.js";import"./search-C4HuXj2h.js";import"./createLucideIcon-CtYgVG1u.js";import"./ClearButton-DxUrYQ5i.js";import"./Button-t6IXiYo0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-hCEexaXZ.js";import"./VisuallyHidden-DQnrbbQ6.js";import"./x-Cy8qabpY.js";import"./FieldError-B9tJyWw2.js";import"./Text-BN2_aXJR.js";import"./Text-EWpD-_jr.js";import"./RSPContexts-DW-eESO9.js";import"./Collection-DURp8c-8.js";import"./CollectionBuilder-ljaGCZ4i.js";import"./index-B__T8vyM.js";import"./DragAndDrop-DFjizKSS.js";import"./getScrollParent-GNvtAy2u.js";import"./scrollIntoView-BCltoq3s.js";import"./SelectionIndicator-C9RAn77b.js";import"./SelectionManager-D1jwCzet.js";import"./useEvent-DMEFFZ8b.js";import"./useDescription-yfp6cPtE.js";import"./inertValue-CY-Arwor.js";import"./useHighlightSelectionDescription-Sea_kkHm.js";import"./useUpdateEffect-Cu3ftdOW.js";import"./ListKeyboardDelegate-CE4VHnG8.js";import"./useHasTabbableChild-B6u7sHG4.js";import"./Checkbox-BbZvhlDh.js";import"./Form-lu2e_-CI.js";import"./check-CH5de5PO.js";import"./useToggleState-Be0mdiha.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
