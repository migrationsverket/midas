import{r as m,f as l,j as t}from"./iframe-Bc-UjTRz.js";import{S as d}from"./SearchField-DnH9ISID.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DNKoO0sh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CIlBOTwB.js";import"./clsx-B-dksMZM.js";import"./Form-MxAWzd2x.js";import"./useFocusRing-DmMd8vo8.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./Input-BZYYU2yt.js";import"./Hidden-Bobixe9k.js";import"./Button-BBbybcMx.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./FieldError-pc1xIYti.js";import"./Text-FaStHPve.js";import"./clsx-Ciqy0D92.js";import"./Text-EmoXsUsF.js";import"./RSPContexts-BrVLX_Kr.js";import"./Group-Bzniv0F2.js";import"./useControlledState-Dz98cjw-.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-eIYPxOb0.js";import"./useField-CMU55_2k.js";import"./TextField.module-DdivwlC8.js";import"./search-fbbPi4nf.js";import"./createLucideIcon-Cvy5MTlk.js";import"./x-BlqzX1Dg.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Button-Ddjv6hkf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-De98nctX.js";import"./Collection-DChyS9dt.js";import"./index-B-79tFRT.js";import"./DragAndDrop-BaAzLR14.js";import"./getScrollParent-DeC6xe2r.js";import"./scrollIntoView-CTyn5EWZ.js";import"./SelectionIndicator-gZnD50wI.js";import"./SelectionManager-D8tK0CCZ.js";import"./useEvent-CjNBBIKs.js";import"./useDescription-axt_AZYR.js";import"./inertValue-K4I0xsIo.js";import"./useHighlightSelectionDescription-zZXGkSet.js";import"./useUpdateEffect-CXdA3QNj.js";import"./ListKeyboardDelegate-Ch3xdJaU.js";import"./useHasTabbableChild-DHHTkh87.js";import"./Checkbox-3GA-Gy7P.js";import"./check-CV39bvdl.js";import"./useToggleState-iSpTA0kN.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
