import{r as m,f as l,j as t}from"./iframe-DCTfXxhU.js";import{S as d}from"./SearchField-CGC8EozO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DUcrL49z.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-nW_xli8K.js";import"./clsx-B-dksMZM.js";import"./Form-B53GEl8m.js";import"./useFocusRing-DkB_y7Fd.js";import"./index-mul5IfuL.js";import"./index-oL1NoEtf.js";import"./Input-BD-aNJo6.js";import"./Hidden-Dz79xEs9.js";import"./Button-CFGQLTfC.js";import"./useLabel-5AB1LZK2.js";import"./useLabels-DDnu_dmS.js";import"./useButton-Dit7Lb_r.js";import"./FieldError-CjtBgxrO.js";import"./Text-5UTT66SL.js";import"./clsx-Ciqy0D92.js";import"./Text-Caoun6Yq.js";import"./RSPContexts-C4YWDn84.js";import"./Group-CQg2sBSK.js";import"./useControlledState-2cB3sfef.js";import"./useLocalizedStringFormatter-CXqAKE2A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ce7gwFy5.js";import"./useField-cahVHmCN.js";import"./TextField.module-DdivwlC8.js";import"./search-CV0-ASWR.js";import"./createLucideIcon-2FpY4XeI.js";import"./x-DKEdZNvx.js";import"./useLocalizedStringFormatter-D6vCsR43.js";import"./Button-9AP9GDtE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BmJc66Gc.js";import"./Collection-MVAFJtKF.js";import"./index-DhAt9fxo.js";import"./DragAndDrop-DFNmFoT_.js";import"./getScrollParent-DwM-DNDW.js";import"./scrollIntoView-B6roOr1g.js";import"./SelectionIndicator-CNpscESu.js";import"./SelectionManager-Q5KiZ2oK.js";import"./useEvent-OuWmKtZ0.js";import"./useDescription-DDe33wr-.js";import"./inertValue-Dd-34OqN.js";import"./useHighlightSelectionDescription-OWMd3beu.js";import"./useUpdateEffect-BhvcEfLg.js";import"./ListKeyboardDelegate-DB5YzvGd.js";import"./useHasTabbableChild-tJarpbUT.js";import"./Checkbox-afTZge0o.js";import"./check-Bj8zVnNO.js";import"./useToggleState-DR1GZHOH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
