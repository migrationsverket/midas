import{r as m,f as l,j as t}from"./iframe-Cvf5bOeL.js";import{S as d}from"./SearchField-ZhZyis6U.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DU2TPFX_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C6H-hxLp.js";import"./utils-C1R7Byny.js";import"./useLocalizedStringFormatter-C0qo-Kt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-tLVQaiTz.js";import"./useFocusRing-COt4M2p8.js";import"./index-ClZalfPt.js";import"./index-CXp7TptX.js";import"./useFormValidation-BvzmB0lD.js";import"./useField-DbedPEp5.js";import"./Button-CxK6-t7a.js";import"./Hidden-BkiKYALS.js";import"./useLabels-Ds9sWjje.js";import"./useButton-CeaaOal7.js";import"./search-kXom4bOP.js";import"./createLucideIcon-AeCqa4TH.js";import"./ClearButton-Bq50jhxr.js";import"./Button-Cpd04SUc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Conpc6HM.js";import"./VisuallyHidden-BC_L462J.js";import"./x-QFX-QYqm.js";import"./FieldError-CiZkIitt.js";import"./Text-kmtP8_oY.js";import"./Text-CBvf4Q07.js";import"./RSPContexts-BhKMO7Rz.js";import"./Collection-BL8pLVDW.js";import"./index-cJes_YYu.js";import"./DragAndDrop-BTXkTTp8.js";import"./getScrollParent-UzGHslW5.js";import"./scrollIntoView-BYEbTNmx.js";import"./SelectionIndicator-BhSrR2aJ.js";import"./SelectionManager-B2QUI9_y.js";import"./useEvent-HhEyoxIa.js";import"./useDescription-DvsSwlbW.js";import"./inertValue-CchIRi3D.js";import"./useHighlightSelectionDescription-BbSV1LgK.js";import"./useUpdateEffect-FbPN4Kfo.js";import"./ListKeyboardDelegate-Dqm4dEGS.js";import"./useHasTabbableChild-zYlrdZQN.js";import"./Checkbox-JutZ4BVT.js";import"./Form-CEsc4aGb.js";import"./check-DR1Q-OOX.js";import"./useToggleState-Q3XA1JWk.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
