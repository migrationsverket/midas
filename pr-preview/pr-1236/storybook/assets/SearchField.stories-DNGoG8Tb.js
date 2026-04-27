import{r as m,f as l,j as t}from"./iframe-BiQ8HasD.js";import{S as d}from"./SearchField-DQCDJ-ym.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-vmBINi-D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-HJUYK1j_.js";import"./clsx-B-dksMZM.js";import"./Form-D2H-KRh-.js";import"./useFocusRing-Dh9TFhU0.js";import"./index-CxCqsVJY.js";import"./index-B9ZJX168.js";import"./Input-DaFhkqYK.js";import"./Hidden-DEdvWcqT.js";import"./Button-DOF2Ijgw.js";import"./useLabel-8IgHcDVM.js";import"./useLabels-H9owUaj8.js";import"./useButton-BbHDi8ZV.js";import"./FieldError-jePN0XGs.js";import"./Text-DGK2Zvf0.js";import"./clsx-Ciqy0D92.js";import"./Text-BdITZZNK.js";import"./RSPContexts-CmmbFvVN.js";import"./Group-BYPqrYrz.js";import"./useControlledState-DOzruH4H.js";import"./useLocalizedStringFormatter-CembVOjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B71p3qEk.js";import"./useField-CBOuPJem.js";import"./TextField.module-DdivwlC8.js";import"./search-xvufFoFl.js";import"./createLucideIcon-Dn_efDgc.js";import"./x-Cmfu2hA0.js";import"./useLocalizedStringFormatter-CgDdVzRk.js";import"./Button-CBosCwI1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-iHVSgYDu.js";import"./Collection-CNlGcjka.js";import"./index-Cjx5nzwT.js";import"./DragAndDrop-Ds437lOy.js";import"./getScrollParent-BcnQWZnN.js";import"./scrollIntoView-rDKecejh.js";import"./SelectionIndicator-Cvp4OCBG.js";import"./SelectionManager-DsyP4aRP.js";import"./useEvent-Ym0ZfLi1.js";import"./useDescription-Crs7vcLi.js";import"./inertValue-DJUvZpxT.js";import"./useHighlightSelectionDescription-21ISR8pT.js";import"./useUpdateEffect-DmB7HlV7.js";import"./ListKeyboardDelegate-8COEurd_.js";import"./useHasTabbableChild-Dhcua5N5.js";import"./Checkbox-CXraPMD-.js";import"./check-CuQvanpN.js";import"./useToggleState-CiOcr2kQ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
