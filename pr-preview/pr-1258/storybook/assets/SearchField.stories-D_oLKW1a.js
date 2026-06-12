import{r as m,f as l,j as t}from"./iframe-BqQ5c8fE.js";import{S as d}from"./SearchField-Df3U0QQq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BCLAdF8y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-vcgv-geB.js";import"./clsx-B-dksMZM.js";import"./Form-DesHcFFM.js";import"./useFocusRing-0ttJCKLt.js";import"./index-BDVX9JuE.js";import"./index-Dx4QUBTR.js";import"./Input-C_rKGDhH.js";import"./Hidden-lysAnu3A.js";import"./Button-BUzCWcrF.js";import"./useLabel-BDoARLXo.js";import"./useLabels-Z9FfN6Gk.js";import"./useButton-CjstFyO0.js";import"./FieldError-vKbkj088.js";import"./Text-mKjyceMN.js";import"./clsx-Ciqy0D92.js";import"./Text-DZT9e49R.js";import"./RSPContexts-BnH9bYe5.js";import"./Group-B96oZygu.js";import"./useControlledState-p_0xc8M1.js";import"./useLocalizedStringFormatter-p3b_RLPb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CM4pVSWA.js";import"./useField-BpwbsBj8.js";import"./TextField.module-DdivwlC8.js";import"./search-DDgHXfO6.js";import"./createLucideIcon-BcjPS7EP.js";import"./x-DEICiepl.js";import"./useLocalizedStringFormatter-CDETYbM5.js";import"./Button-BS1gBrNw.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BYz02vHS.js";import"./Collection-CxdKGeHr.js";import"./index-21XDGZRk.js";import"./DragAndDrop-Ajiuuo6Q.js";import"./getScrollParent-BizxzfZb.js";import"./scrollIntoView-BSmOLwAx.js";import"./SelectionIndicator-C8zII3ul.js";import"./SelectionManager-DSIhunJP.js";import"./useEvent-CwwdPrs-.js";import"./useDescription-BXuFRPve.js";import"./inertValue-BphsYwDq.js";import"./useHighlightSelectionDescription-PECXPnzc.js";import"./useUpdateEffect-CnIA9zgc.js";import"./ListKeyboardDelegate-ChxPjGZv.js";import"./useHasTabbableChild-BfvRtqUU.js";import"./Checkbox-D5KdQcZu.js";import"./check-BgzoDrGb.js";import"./useToggleState-DD_ZSnCr.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
