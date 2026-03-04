import{r as m,f as l,j as t}from"./iframe-UFnE_WWZ.js";import{S as d}from"./SearchField-BXhONwDE.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bted67oa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DkL4wxsI.js";import"./utils-Boro9Fs8.js";import"./useLocalizedStringFormatter-W8pD0Zdb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0DVQZmI.js";import"./useFocusRing-CagMB1EX.js";import"./index-DuAER-0b.js";import"./index-B_Tx1Q9m.js";import"./useFormValidation-CLKVdQyp.js";import"./useField-BocjWxIh.js";import"./Button-BlMAHKed.js";import"./Hidden-Cq2GYd5C.js";import"./useLabels-DemKNQhF.js";import"./useButton-C4720CM1.js";import"./search-C38WdCub.js";import"./createLucideIcon-DWAOhH2n.js";import"./ClearButton-RyMsZ4O1.js";import"./Button-Bqr_oLK4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BfDZhfHQ.js";import"./VisuallyHidden-CqngOA9c.js";import"./x-PQVQjURZ.js";import"./FieldError-DIDzRcSm.js";import"./Text-VMpyaGIc.js";import"./Text-DMrMZJ_c.js";import"./RSPContexts-Df9uULAB.js";import"./Collection-DA9lBYIa.js";import"./index-dfewEFsO.js";import"./DragAndDrop-DqqgYo4d.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ijx4JXFT.js";import"./SelectionManager-BlhYVVEw.js";import"./useEvent-B3g2B29-.js";import"./useDescription-aOBh8foQ.js";import"./inertValue-DimpDGny.js";import"./useHighlightSelectionDescription-6HkwRpBZ.js";import"./useUpdateEffect-CCurw6Se.js";import"./ListKeyboardDelegate-BB-99mkr.js";import"./useHasTabbableChild-CU_26SY1.js";import"./Checkbox-DaBgK004.js";import"./Form-CuJ-wqIn.js";import"./check-BbyD2whQ.js";import"./useToggleState-CREKWxwz.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
