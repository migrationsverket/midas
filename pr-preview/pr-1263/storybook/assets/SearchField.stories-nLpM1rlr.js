import{r as m,f as l,j as t}from"./iframe-gbJBpoDx.js";import{S as d}from"./SearchField-BCIW9odG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Ix_u8ymy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DUgHs6FT.js";import"./clsx-B-dksMZM.js";import"./Form-DzUfN3tc.js";import"./useFocusRing-CdGrrviA.js";import"./index-DGfeUZWJ.js";import"./index-h8QHE_zG.js";import"./Input-CQCvpima.js";import"./Hidden-CvjG_1RQ.js";import"./Button-C3tdjGV6.js";import"./useLabel-DBWjU4Cx.js";import"./useLabels-CGcCPDWZ.js";import"./useButton-BmNiDIvC.js";import"./FieldError-KeTSBYc8.js";import"./Text-CE4EKtCP.js";import"./clsx-Ciqy0D92.js";import"./Text-zmsiiY3G.js";import"./RSPContexts-DiLb2jsV.js";import"./Group-Bl8S9UBo.js";import"./useControlledState-CVd5Xqz2.js";import"./useLocalizedStringFormatter--yN4gUH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ibv8X9u5.js";import"./useField-D1VuoHuM.js";import"./TextField.module-DdivwlC8.js";import"./search-CBgSc-cm.js";import"./createLucideIcon-C3IEX8hu.js";import"./x-B_GjQ7rz.js";import"./useLocalizedStringFormatter-BrXpMl3k.js";import"./Button-Dpg56qc6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ck3fIWPQ.js";import"./Collection-CM-3lYwE.js";import"./index-BdX53cNt.js";import"./DragAndDrop-CBt946Cs.js";import"./getScrollParent-CXwwiqPr.js";import"./scrollIntoView-DIgHhdMC.js";import"./SelectionIndicator-Ce5zkH-2.js";import"./SelectionManager-C0D1h0Vh.js";import"./useEvent-waE1JgxF.js";import"./useDescription-6CJm5bcg.js";import"./inertValue-DOlo5z-c.js";import"./useHighlightSelectionDescription-D2EyrXpV.js";import"./useUpdateEffect-COKkianB.js";import"./ListKeyboardDelegate-la3RUrG9.js";import"./useHasTabbableChild-DBDxHRKv.js";import"./Checkbox-BY1orbLd.js";import"./check-DDdM9Hsb.js";import"./useToggleState-COhdpMVw.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
