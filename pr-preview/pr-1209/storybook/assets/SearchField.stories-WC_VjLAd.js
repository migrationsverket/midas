import{r as m,f as l,j as t}from"./iframe-DWnL6zvQ.js";import{S as d}from"./SearchField-CdBtkqk9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D8DqOhT0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZOmRnVQp.js";import"./clsx-B-dksMZM.js";import"./Form-Klc040-z.js";import"./useFocusRing-T-08Y7EQ.js";import"./index-BKrgJF-5.js";import"./index-BdkXzYOX.js";import"./Input-DO9zOzRd.js";import"./Hidden-D-JZUsjj.js";import"./Button-aAs4bXFc.js";import"./useLabel-0R8_MAd9.js";import"./useLabels-D-eiwoeG.js";import"./useButton-Da9Ah83K.js";import"./FieldError-ans3DohR.js";import"./Text-BFKc_gYr.js";import"./clsx-Ciqy0D92.js";import"./Text-BYUx4Ue_.js";import"./RSPContexts-Ce97Jw3e.js";import"./Group-QhqBsbqD.js";import"./useControlledState-BFA4HXY0.js";import"./useLocalizedStringFormatter-B7dpYpQH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C9ilSKUg.js";import"./useField-JVOxqYJx.js";import"./TextField.module-DdivwlC8.js";import"./search-C2E7zBVU.js";import"./createLucideIcon--0_c509q.js";import"./x-uyk-3eD_.js";import"./useLocalizedStringFormatter-BGNOMAGR.js";import"./Button-DLalHH7Q.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbmKXf8Z.js";import"./Collection-BmKKOi01.js";import"./index-CutLW6j0.js";import"./DragAndDrop-BQ0yXORB.js";import"./getScrollParent-DhTLAxD9.js";import"./scrollIntoView-CVWuYFBu.js";import"./SelectionIndicator-MWBRlw8e.js";import"./SelectionManager-x-FMyY7a.js";import"./useEvent-Dnzvg3-j.js";import"./useDescription-DfYNITNj.js";import"./inertValue-BkTGBIFT.js";import"./useHighlightSelectionDescription-CWVP1NiR.js";import"./useUpdateEffect-spkZuIIx.js";import"./ListKeyboardDelegate-RRIEgPTP.js";import"./useHasTabbableChild-BZDJmkuY.js";import"./Checkbox-CE49hd5z.js";import"./check-TMZS5QZQ.js";import"./useToggleState-c79PZ5Aj.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
