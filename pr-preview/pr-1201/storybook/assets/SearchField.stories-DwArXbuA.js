import{r as m,f as l,j as t}from"./iframe-CKynqbsT.js";import{S as d}from"./SearchField-Bdu7DO16.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C7zqnnPq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cz4s-P07.js";import"./clsx-B-dksMZM.js";import"./Form-P19_AeiU.js";import"./useFocusRing-DW03qt76.js";import"./index-MKc-RSGl.js";import"./index-DbmjAuuR.js";import"./Input-C-G8Md4f.js";import"./Hidden-CxwF48Ci.js";import"./Button-odKdBChn.js";import"./useLabel-BScGGoXy.js";import"./useLabels-CasMb-p3.js";import"./useButton-K4roNkpf.js";import"./FieldError-D5ePyvQL.js";import"./Text-CFqReYPn.js";import"./clsx-Ciqy0D92.js";import"./Text-CV3rC3lw.js";import"./RSPContexts-1kvrZnW_.js";import"./Group-00TIn4gD.js";import"./useControlledState-CkRmHnNo.js";import"./useLocalizedStringFormatter-1siNxGD0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CnAibDQ-.js";import"./useField-d_mLWNBx.js";import"./TextField.module-DdivwlC8.js";import"./search-D3frWcUw.js";import"./createLucideIcon-B7xcXnKD.js";import"./x-CO1sdvqd.js";import"./useLocalizedStringFormatter-BJaowkmQ.js";import"./Button-DQDk8v-k.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BxWxnvxB.js";import"./Collection-D_pg0gvp.js";import"./index-Cxs-RWp5.js";import"./DragAndDrop-Dv2YqOJ7.js";import"./getScrollParent-BDZEhSWz.js";import"./scrollIntoView-DZna20aA.js";import"./SelectionIndicator-DGMQG1Fl.js";import"./SelectionManager-YoIizi1X.js";import"./useEvent-Dya9lerV.js";import"./useDescription-CppHAd8O.js";import"./inertValue-DTOJGq6y.js";import"./useHighlightSelectionDescription-DVZoHLx9.js";import"./useUpdateEffect-Bqy7s0Hg.js";import"./ListKeyboardDelegate-CenhieDP.js";import"./useHasTabbableChild-BQye-FJ_.js";import"./Checkbox-Bii8o5dJ.js";import"./check-Dfcj8Uuh.js";import"./useToggleState-CBmzvW7i.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
