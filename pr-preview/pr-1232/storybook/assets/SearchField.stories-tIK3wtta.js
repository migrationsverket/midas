import{r as m,f as l,j as t}from"./iframe-CiZlFozv.js";import{S as d}from"./SearchField-CuaxzTf7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DQNLBE2P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtoKVfJq.js";import"./clsx-B-dksMZM.js";import"./Form-CPfOE8lK.js";import"./useFocusRing-C8iINmO1.js";import"./index-C8NJLHuH.js";import"./index-B_UHrRhL.js";import"./Input-B76nlUBd.js";import"./Hidden-CBUgc4Bq.js";import"./Button-CxmVBxVQ.js";import"./useLabel-BKmML2fi.js";import"./useLabels-I5-LcgNP.js";import"./useButton-C0UTJWwd.js";import"./FieldError-BFjjyPg1.js";import"./Text-Dp6H8GRU.js";import"./clsx-Ciqy0D92.js";import"./Text-CXoRcQkQ.js";import"./RSPContexts-fJFJPzCo.js";import"./Group-DRiAJmX2.js";import"./useControlledState-k5LcuuXZ.js";import"./useLocalizedStringFormatter-BdUUKMic.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMXOK1F5.js";import"./useField-Bx-SoAUQ.js";import"./TextField.module-DdivwlC8.js";import"./search-DFA0X_oP.js";import"./createLucideIcon-DFSC9aW4.js";import"./x-DBo1ex8S.js";import"./useLocalizedStringFormatter-BpsAI3rB.js";import"./Button-BS9Q-Own.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D6ktoCNF.js";import"./Collection-Dmi7A3go.js";import"./index-CGOcwJAX.js";import"./DragAndDrop-DvOnAK_Q.js";import"./getScrollParent-BTcAThv_.js";import"./scrollIntoView-De6oNUSa.js";import"./SelectionIndicator-OL0J49H_.js";import"./SelectionManager-4hK9Esex.js";import"./useEvent-CUD5UUml.js";import"./useDescription-6-pChhm_.js";import"./inertValue-DyMxrIjs.js";import"./useHighlightSelectionDescription-Ba37kdnP.js";import"./useUpdateEffect-CY3AhfRb.js";import"./ListKeyboardDelegate-B1l65HEm.js";import"./useHasTabbableChild-C7E29BDg.js";import"./Checkbox-C8ZM3DgC.js";import"./check-DdJfQb7r.js";import"./useToggleState-Bt6-F4tR.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
