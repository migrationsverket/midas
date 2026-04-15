import{r as m,f as l,j as t}from"./iframe-DD86HrH2.js";import{S as d}from"./SearchField-DB3dfQ_p.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ihvHC25i.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-COpPBJUa.js";import"./clsx-B-dksMZM.js";import"./Form-CeuJdreE.js";import"./useFocusRing-BexPlixw.js";import"./index-BRqGpYZa.js";import"./index-c37RaAEE.js";import"./Input-DaAIxGI2.js";import"./Hidden-DxNA2jAI.js";import"./Button-Dlxsdkdy.js";import"./useLabel-Bo2GeM8m.js";import"./useLabels-C7ZzmUeQ.js";import"./useButton-D2fUs3pD.js";import"./FieldError-DI4cB23D.js";import"./Text-DuibH3v7.js";import"./clsx-Ciqy0D92.js";import"./Text-CmsABE1n.js";import"./RSPContexts-OgLCyc19.js";import"./Group-B11b6zrd.js";import"./useControlledState-k07B6mZK.js";import"./useLocalizedStringFormatter-CL-qCV33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtX9gWJC.js";import"./useField-K4C8pkC3.js";import"./TextField.module-DdivwlC8.js";import"./search-CR5C9Rm2.js";import"./createLucideIcon-DzgrZqcN.js";import"./x-BX_qSKOQ.js";import"./useLocalizedStringFormatter-rPCKOnn1.js";import"./Button-BFvCKzsz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DI8ejz9M.js";import"./Collection-CJicqcV9.js";import"./index-BMz79FiH.js";import"./DragAndDrop-LyW6lOqH.js";import"./getScrollParent-CvIpxtIQ.js";import"./scrollIntoView-CuCYXK6V.js";import"./SelectionIndicator-BdMqMuAi.js";import"./SelectionManager-BvPH3Yxz.js";import"./useEvent-ChusgNbw.js";import"./useDescription-CyBHIiEQ.js";import"./inertValue-Dm2mRv5P.js";import"./useHighlightSelectionDescription-B8oQjWt4.js";import"./useUpdateEffect-CMS3qKmg.js";import"./ListKeyboardDelegate-qA9M4eDd.js";import"./useHasTabbableChild-B3nneAme.js";import"./Checkbox-zdSKKN4O.js";import"./check-DnxiYyoz.js";import"./useToggleState-B4u824Lz.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
