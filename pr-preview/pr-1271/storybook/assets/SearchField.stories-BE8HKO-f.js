import{r as m,f as l,j as t}from"./iframe-CVnRxWgx.js";import{S as d}from"./SearchField-BT6gZRZ_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-bZOzpAXy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CGtyN9cn.js";import"./clsx-B-dksMZM.js";import"./Form-YZ9PuLqX.js";import"./useFocusRing-94VK6gl0.js";import"./index-Br_PJyAP.js";import"./index-DGjZojd9.js";import"./Input-B5olS4Q4.js";import"./Hidden-DjmPCuwM.js";import"./Button-i9ocr7Pu.js";import"./useLabel-u8jIf097.js";import"./useLabels-DvMiIHJl.js";import"./useButton-DiNxNOYc.js";import"./FieldError-CfE9jQyI.js";import"./Text-CIPwlNyJ.js";import"./clsx-Ciqy0D92.js";import"./Text-D7ORYKKB.js";import"./RSPContexts-CE4pINDX.js";import"./Group-DvpDJCQD.js";import"./useControlledState-DJTyz9Tw.js";import"./useLocalizedStringFormatter-6_DEL2_r.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFydc_q3.js";import"./useField-BkKnTjOj.js";import"./TextField.module-DdivwlC8.js";import"./search-KfROoK_5.js";import"./createLucideIcon-CO_w61Gv.js";import"./x-CUtMZV2x.js";import"./useLocalizedStringFormatter-B64DUcOo.js";import"./Button-BlcQlVBG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-x3g4TarU.js";import"./Collection-BFzhGCWq.js";import"./index-DM4vN2rR.js";import"./DragAndDrop-DA2sFeA2.js";import"./getScrollParent-BYv7XFLc.js";import"./scrollIntoView-Bmq2UQLA.js";import"./SelectionIndicator-kxHNfWwY.js";import"./SelectionManager-DLo-akIF.js";import"./useEvent-qLpbXbRS.js";import"./useDescription-DwHvhYZf.js";import"./inertValue-BdEIa-YS.js";import"./useHighlightSelectionDescription-CWkuesFj.js";import"./useUpdateEffect-B-rNFHZR.js";import"./ListKeyboardDelegate-jy6EvDEx.js";import"./useHasTabbableChild-BayUuOUM.js";import"./Checkbox-Czjc4heJ.js";import"./check-ChzOln4A.js";import"./useToggleState-Gy9ofi-6.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
