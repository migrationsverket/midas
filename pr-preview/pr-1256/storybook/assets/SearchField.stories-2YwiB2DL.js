import{r as m,f as l,j as t}from"./iframe-B3gHnZ_4.js";import{S as d}from"./SearchField-DiGMtexs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C7L4Gyzj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CdET5WnV.js";import"./clsx-B-dksMZM.js";import"./Form-BZOB3ErZ.js";import"./useFocusRing-DIJ0sANO.js";import"./index-D2HHYUpr.js";import"./index-ClVbkfNF.js";import"./Input-BzmTIW1x.js";import"./Hidden-dfLF-Ti8.js";import"./Button-tj4RHwPQ.js";import"./useLabel-Co4jWqc7.js";import"./useLabels-BzsFe6ap.js";import"./useButton-wyQ3LRsu.js";import"./FieldError-pXnrGUBV.js";import"./Text-C8paMr1m.js";import"./clsx-Ciqy0D92.js";import"./Text-DcZUZMzL.js";import"./RSPContexts-DQ5I8I6_.js";import"./Group-DDmPJ7wi.js";import"./useControlledState-BvujKDrt.js";import"./useLocalizedStringFormatter-DX3s4o0C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IvDQy2TR.js";import"./useField-DuF-U182.js";import"./TextField.module-DdivwlC8.js";import"./search-CFrmVsEk.js";import"./createLucideIcon-ClRsgvfJ.js";import"./x-DCrvMdPs.js";import"./useLocalizedStringFormatter-Cp3BGEKs.js";import"./Button-Cw4w6g1P.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_rpyZ3J.js";import"./Collection-Bm1PjTGX.js";import"./index-BomGYp4m.js";import"./DragAndDrop-uXNVArbE.js";import"./getScrollParent-DysXOOBH.js";import"./scrollIntoView-BeJDYg3T.js";import"./SelectionIndicator-BG6APWev.js";import"./SelectionManager-kVD2iHAs.js";import"./useEvent-BVTuF7AB.js";import"./useDescription-C4OXEZSl.js";import"./inertValue-CQCTV_zY.js";import"./useHighlightSelectionDescription-DxiNP2vx.js";import"./useUpdateEffect-I1dAQKC5.js";import"./ListKeyboardDelegate-BQ6Nv5pj.js";import"./useHasTabbableChild-BgDmr7d-.js";import"./Checkbox-Cw6aobm9.js";import"./check-D0oMk9Yc.js";import"./useToggleState-hqu5vNWt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
