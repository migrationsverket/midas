import{r as m,f as l,j as t}from"./iframe-Bv6YAP-H.js";import{S as d}from"./SearchField-CCRuCqSv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DNzJi_Lp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-aKxnkjqL.js";import"./clsx-B-dksMZM.js";import"./Form-Ch32kDXo.js";import"./useFocusRing-vLQdNIKu.js";import"./index-wSw7Ttva.js";import"./index-B4SFKLec.js";import"./Input-Dda4_dBe.js";import"./Hidden-DhnPUChE.js";import"./Button-1f9Yc7Mz.js";import"./useLabel-D6pTBZvb.js";import"./useLabels-DAH0at8A.js";import"./useButton-B6E3_51_.js";import"./FieldError-aQet2mym.js";import"./Text-CrHwImJG.js";import"./clsx-Ciqy0D92.js";import"./Text-DPW0E3tR.js";import"./RSPContexts-Cmel4BHs.js";import"./Group-BxiqzYT5.js";import"./useControlledState-CcT1w6-I.js";import"./useLocalizedStringFormatter-BTXjr0WF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DdZE-cM7.js";import"./useField-BF1xuw3-.js";import"./TextField.module-DdivwlC8.js";import"./search-dA7hxSDr.js";import"./createLucideIcon-DlyUrHS2.js";import"./x-BdrId5d4.js";import"./useLocalizedStringFormatter-Bn39dXyI.js";import"./Button-BH5A087H.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DEiD2GQe.js";import"./Collection-B4VcNlct.js";import"./index-K7IduVvo.js";import"./DragAndDrop-BzCXDd9h.js";import"./getScrollParent-CmM-5YOM.js";import"./scrollIntoView-CfOu5aQk.js";import"./SelectionIndicator-BxOQVkwD.js";import"./SelectionManager-BHNfLphX.js";import"./useEvent-BaPHHBlD.js";import"./useDescription-y5DJBmVT.js";import"./inertValue-DlgxfoDw.js";import"./useHighlightSelectionDescription-CLRtk1C5.js";import"./useUpdateEffect-BWfLRk6t.js";import"./ListKeyboardDelegate-BCkVVRiL.js";import"./useHasTabbableChild-3VW_viXC.js";import"./Checkbox-BujbONta.js";import"./check-CfnZqAf7.js";import"./useToggleState-B31EMyL7.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
