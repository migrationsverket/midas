import{r as m,f as l,j as t}from"./iframe-CDA_ildW.js";import{S as d}from"./SearchField-BmEWnnOS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B22-oa8M.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DYwc33gT.js";import"./clsx-B-dksMZM.js";import"./Form-DdFGDuZ4.js";import"./useFocusRing-3NNdwvus.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./Input-Da3U7j3V.js";import"./Hidden-DPevkO8m.js";import"./Button-Djyjt8oy.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./FieldError-6T9sq_yG.js";import"./Text-K4BkD2rQ.js";import"./clsx-Ciqy0D92.js";import"./Text-ThZYXmAV.js";import"./RSPContexts-txMKpHrt.js";import"./Group-C2aha83k.js";import"./useControlledState-K9GQEKN-.js";import"./useLocalizedStringFormatter-Bx9Y73Mw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSELfoWC.js";import"./useField-DXzrxJwr.js";import"./TextField.module-DdivwlC8.js";import"./search-CIYgvpY0.js";import"./createLucideIcon-HvfaTVWX.js";import"./x-BUsqX4F1.js";import"./useLocalizedStringFormatter-D0XL9qnD.js";import"./Button-ByHOpWo0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D1KRANLi.js";import"./Collection-SRMBzawM.js";import"./index-CXnan05L.js";import"./DragAndDrop-Bj4UrRsX.js";import"./getScrollParent-BOHsqMJ6.js";import"./scrollIntoView-CDtwkdUZ.js";import"./SelectionIndicator-Mz0JAxcc.js";import"./SelectionManager-DvdfVsnr.js";import"./useEvent-H41NhmUB.js";import"./useDescription-_BnwWcQ8.js";import"./inertValue-PhxAE49p.js";import"./useHighlightSelectionDescription-CYiEK3_6.js";import"./useUpdateEffect-Bfjftbu-.js";import"./ListKeyboardDelegate-B31G3H95.js";import"./useHasTabbableChild-UT-ghRg_.js";import"./Checkbox-BuC-Sg7w.js";import"./check-CNy05Esb.js";import"./useToggleState-orlbBJVk.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
