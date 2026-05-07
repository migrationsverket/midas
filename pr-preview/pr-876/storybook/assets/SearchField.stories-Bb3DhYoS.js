import{r as m,f as l,j as t}from"./iframe-Bb_VlPo9.js";import{S as d}from"./SearchField-DR7fMKEH.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BPgUN5j1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-2r_62JIY.js";import"./clsx-B-dksMZM.js";import"./Form-CPAndHnn.js";import"./useFocusRing-DQRmwydT.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./Input-C4khlQQT.js";import"./Hidden-Da5yr2Rv.js";import"./Button-DwR9JkjB.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./FieldError-CbhfVIv0.js";import"./Text-D7Tr2OQH.js";import"./clsx-Ciqy0D92.js";import"./Text-DTJEuclf.js";import"./RSPContexts-DMtGcFC9.js";import"./Group-CHrDpi7F.js";import"./useControlledState-CFQUuuzt.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVFvsBTT.js";import"./useField-Be7ObOKH.js";import"./TextField.module-DdivwlC8.js";import"./search-C3SC2sZU.js";import"./createLucideIcon-a3otmfa0.js";import"./x-BdcCpJzo.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./Button-BoP38GQz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-7RIQbTv5.js";import"./Collection-BpAJZJBW.js";import"./index-Dfxk7_9d.js";import"./DragAndDrop-Dr58pSK5.js";import"./getScrollParent-BlCILjnb.js";import"./scrollIntoView-BG7Sd968.js";import"./SelectionIndicator-DpvN-zjH.js";import"./SelectionManager-DuW5VBfE.js";import"./useEvent-u95MDZQv.js";import"./useDescription-C9KC-F2o.js";import"./inertValue-5GZBxCPq.js";import"./useHighlightSelectionDescription-CH4jIOgq.js";import"./useUpdateEffect-Bm-5DJ5V.js";import"./ListKeyboardDelegate-B5huwegM.js";import"./useHasTabbableChild-qxHfv_3D.js";import"./Checkbox-Dx_L8R-S.js";import"./check-CBmtDDja.js";import"./useToggleState-4tm9_g3s.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
