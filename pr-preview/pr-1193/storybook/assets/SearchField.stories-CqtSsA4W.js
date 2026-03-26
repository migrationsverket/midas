import{r as m,f as l,j as t}from"./iframe-Nwmt74ZK.js";import{S as d}from"./SearchField-8CBFrO4b.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cg_cN5JI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C6s6aSRX.js";import"./clsx-B-dksMZM.js";import"./Form-BUdIhl_c.js";import"./useFocusRing-CWypq6Zx.js";import"./index-ch-f0Bx3.js";import"./index-BhWzPHH5.js";import"./Input-BsAQh_8z.js";import"./Hidden-BPf52IcM.js";import"./Button-BFe_Cqcu.js";import"./useLabel-NM3EoEuU.js";import"./useLabels-BWJGA9gI.js";import"./useButton-DPlFKcS8.js";import"./FieldError-Br06WdKh.js";import"./Text-C173mZfn.js";import"./clsx-Ciqy0D92.js";import"./Text-BsCHJ-9I.js";import"./RSPContexts-DNNsF2wO.js";import"./Group-CuITHOVp.js";import"./useControlledState-BkVOv_aE.js";import"./useLocalizedStringFormatter-BJ5VKpXB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4d_BV9u.js";import"./useField-B5-kLS0F.js";import"./TextField.module-DdivwlC8.js";import"./search-C1LBrZ6m.js";import"./createLucideIcon-BM-CznMN.js";import"./x-CcBqmnVo.js";import"./useLocalizedStringFormatter-C2TFJ0GM.js";import"./Button-BFrhdIAu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CtXXaRnR.js";import"./Collection-04O837hB.js";import"./index-Di_k3Lqc.js";import"./DragAndDrop-VyoLbkQo.js";import"./getScrollParent-C5s_m2ho.js";import"./scrollIntoView-BcBxafTP.js";import"./SelectionIndicator-BR6m66Ye.js";import"./SelectionManager-Bq1KI3CN.js";import"./useEvent-BjT0dJCf.js";import"./useDescription-NCT_P-H8.js";import"./inertValue-BzMuOJyo.js";import"./useHighlightSelectionDescription-CbZcJDm0.js";import"./useUpdateEffect-Ba-XvRAf.js";import"./ListKeyboardDelegate-Dyhz4T5l.js";import"./useHasTabbableChild-BlrlDcgQ.js";import"./Checkbox-DCZA9e8E.js";import"./check-B0NnPj1_.js";import"./useToggleState-DZx3ObKq.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
