import{r as m,f as l,j as t}from"./iframe-Cg9cst3Z.js";import{S as d}from"./SearchField-D2fXxmz9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DQBkOUVQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2II4bp7.js";import"./clsx-B-dksMZM.js";import"./Form-_xeBhpeE.js";import"./useFocusRing-tXHDCFm3.js";import"./index-BFb9kRGB.js";import"./index-DWerqO7l.js";import"./Input-C5Lj_Wzf.js";import"./Hidden-BgIlWTMH.js";import"./Button-ou8EhBUQ.js";import"./useLabels-CiePX7Dn.js";import"./useButton-DC2n-s3O.js";import"./FieldError-VvIdynkJ.js";import"./Text-B_9OfGMe.js";import"./clsx-Ciqy0D92.js";import"./Text-Bie4Jf82.js";import"./RSPContexts-CP6-3Q2F.js";import"./Group-BnEbGSsv.js";import"./useControlledState-L5_oq_SX.js";import"./useLocalizedStringFormatter-D4h7c2FO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFzhgPSu.js";import"./useField-BKczmHIS.js";import"./TextField.module-DdivwlC8.js";import"./search-T0SqDA5U.js";import"./createLucideIcon-DCEeRogg.js";import"./x-BSr4SWE3.js";import"./useLocalizedStringFormatter-CHcVYRW-.js";import"./Button-rHVBUcPU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqMj_RBf.js";import"./Collection-Ce5K4RD7.js";import"./index-Li7LmgrW.js";import"./DragAndDrop-poLkN6Bi.js";import"./getScrollParent-D0UAKGdc.js";import"./scrollIntoView-DwU_eyNu.js";import"./SelectionIndicator-D78Fscba.js";import"./SelectionManager-CE7XN0iM.js";import"./useEvent-CEsrahCK.js";import"./useDescription-BzGroFUq.js";import"./inertValue-CMFa2zBQ.js";import"./useHighlightSelectionDescription-DQXjvDU5.js";import"./useUpdateEffect-C5Jk9Uqx.js";import"./ListKeyboardDelegate-0O8vG3nd.js";import"./useHasTabbableChild-DqSv6rAT.js";import"./Checkbox-Cmc0oNg-.js";import"./check-cEkWtzDL.js";import"./useToggleState-DFfdy8A8.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
