import{r as m,f as l,j as t}from"./iframe-BIHPCSD7.js";import{S as d}from"./SearchField-DXjDyqMb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DYw21I5R.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DD1AhTmn.js";import"./clsx-B-dksMZM.js";import"./Form-DnedwBlt.js";import"./useFocusRing-BMHnjiK5.js";import"./index-D8pKX7IM.js";import"./index-fodDxchC.js";import"./Input-BAiHHtIW.js";import"./Hidden-BPDZ6gCs.js";import"./Button-CSz7Ih4-.js";import"./useLabels-j4j3caFA.js";import"./useButton-COi1XBPP.js";import"./FieldError-Kju1pqM0.js";import"./Text-41JxePIO.js";import"./clsx-Ciqy0D92.js";import"./Text-BxyjZI9K.js";import"./RSPContexts-DjrbWcHb.js";import"./Group-B8O0quDR.js";import"./useControlledState-7StlLOGr.js";import"./useLocalizedStringFormatter-ruJF4A_C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4-3csAp.js";import"./useField-N_ZHho5V.js";import"./TextField.module-DdivwlC8.js";import"./search-DVJ-XTor.js";import"./createLucideIcon-CEpUHvVi.js";import"./x-BjMfPpOk.js";import"./useLocalizedStringFormatter-DgK4llAe.js";import"./Button-B-WLyZXQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQeIgFd3.js";import"./Collection-DuHg5sOR.js";import"./index-Bb61Zy6b.js";import"./DragAndDrop-B0h9tV17.js";import"./getScrollParent-C7NYmB80.js";import"./scrollIntoView-Cjdp4BaG.js";import"./SelectionIndicator-C8dljys4.js";import"./SelectionManager-DyuAahU5.js";import"./useEvent-DwulRvFz.js";import"./useDescription-B6Gpa9qj.js";import"./inertValue-BlD2yDpK.js";import"./useHighlightSelectionDescription-remxntHf.js";import"./useUpdateEffect-DeTD31HD.js";import"./ListKeyboardDelegate-Df15MKn_.js";import"./useHasTabbableChild-CW1zap_Q.js";import"./Checkbox-BpCMZ65p.js";import"./check-Vo02emqU.js";import"./useToggleState-D19-eJHY.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
