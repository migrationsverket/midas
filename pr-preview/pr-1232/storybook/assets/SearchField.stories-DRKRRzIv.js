import{r as m,f as l,j as t}from"./iframe-C2ifzLFW.js";import{S as d}from"./SearchField-BVJT6BMd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cp9g8fm0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-73qIUJkS.js";import"./clsx-B-dksMZM.js";import"./Form-DaC6-Hhf.js";import"./useFocusRing-D5sowTP0.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./Input-BI0h4qhc.js";import"./Hidden-arruSKBU.js";import"./Button-DrEkBHNm.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./FieldError-CG9ZMBd0.js";import"./Text-CD2yXDFK.js";import"./clsx-Ciqy0D92.js";import"./Text-BHGhTSao.js";import"./RSPContexts-D7FudQaj.js";import"./Group-DTqfokrf.js";import"./useControlledState-DIVk5_t_.js";import"./useLocalizedStringFormatter-Bfe8f42t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6rn5EayW.js";import"./useField-DcFwBOo5.js";import"./TextField.module-DdivwlC8.js";import"./search-NNP-kYAW.js";import"./createLucideIcon-BoPfjMKr.js";import"./x-Dn6Rxjbp.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./Button-DtzYCx6b.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1aqafDE.js";import"./Collection-ChbGXkT5.js";import"./index-BueJca3e.js";import"./DragAndDrop-BxmVQRE2.js";import"./getScrollParent-DnkUn25f.js";import"./scrollIntoView-Ch2TMXIT.js";import"./SelectionIndicator-BLMObCuw.js";import"./SelectionManager-Blx_W2he.js";import"./useEvent-DOTctoG_.js";import"./useDescription-CmVv1Pv8.js";import"./inertValue-BvdwUZv6.js";import"./useHighlightSelectionDescription-1ImPl4tU.js";import"./useUpdateEffect-BoDyj24F.js";import"./ListKeyboardDelegate-DyBYuJfv.js";import"./useHasTabbableChild-BPFg-tu5.js";import"./Checkbox-BQP8YS0j.js";import"./check-Dj0Arcqb.js";import"./useToggleState-DnDK2gca.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
