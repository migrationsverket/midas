import{r as m,f as l,j as t}from"./iframe-BRlibj-k.js";import{S as d}from"./SearchField-i9sLaQJY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-KyPOfRBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bx0A40Hz.js";import"./clsx-B-dksMZM.js";import"./Form-CSA3u7JB.js";import"./useFocusRing-CE-jlBYc.js";import"./index-BvCpjtnM.js";import"./index-CUyw_AEg.js";import"./Input-D_W1be-q.js";import"./Hidden-BrLnFV9D.js";import"./Button-B0keB5Wy.js";import"./useLabel-PCvcVGmd.js";import"./useLabels-D3i6Mpdm.js";import"./useButton-BMOcI7o7.js";import"./FieldError-CFA3HJLW.js";import"./Text-Ck72NiTG.js";import"./clsx-Ciqy0D92.js";import"./Text-fpqzAeYU.js";import"./RSPContexts-CV3yeRAb.js";import"./Group-FTG5sa6I.js";import"./useControlledState-CerSLXPK.js";import"./useLocalizedStringFormatter-zTincOmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxB4Xjd_.js";import"./useField-BVUz0JML.js";import"./TextField.module-DdivwlC8.js";import"./search-CM3gs8OV.js";import"./createLucideIcon-p72J_6hu.js";import"./x-KlHF_jbs.js";import"./useLocalizedStringFormatter-nyGG6W03.js";import"./Button-BCeszJe0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DAewgK18.js";import"./Collection-m61hGjFH.js";import"./index-Djsdy0km.js";import"./DragAndDrop-DqcDzgjG.js";import"./getScrollParent-BNETjxTj.js";import"./scrollIntoView-DIdzgJq7.js";import"./SelectionIndicator-6jBuleUJ.js";import"./SelectionManager-BL0dIx3d.js";import"./useEvent-CVRknVnX.js";import"./useDescription-By1zY_hH.js";import"./inertValue-B7S0Ps1Q.js";import"./useHighlightSelectionDescription-D53Dhd13.js";import"./useUpdateEffect-DpCqtSwy.js";import"./ListKeyboardDelegate-Dpjn_onP.js";import"./useHasTabbableChild-C4bPXSBD.js";import"./Checkbox-Dfs5DmLJ.js";import"./check-Cy1zv8AW.js";import"./useToggleState-CIKFmEng.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
