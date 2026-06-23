import{r as m,f as l,j as t}from"./iframe-BusKbIuL.js";import{S as d}from"./SearchField-bJ6zUERH.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Baj6y0QA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./Form-DVi0rKS7.js";import"./useFocusRing-Bkm-baB3.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./Input-ChWvvezn.js";import"./Hidden-IsjPxMOX.js";import"./Button-D16PjYbu.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./FieldError-DYrJGow5.js";import"./Text-By1Rmolv.js";import"./clsx-Ciqy0D92.js";import"./Text-BSlgEswi.js";import"./RSPContexts-CMg-o8P6.js";import"./Group-CBE_Jb-J.js";import"./useControlledState-VeRXhIhk.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA7Ox9WZ.js";import"./useField-TTAqEZ-L.js";import"./TextField.module-DdivwlC8.js";import"./search-Drz4guJh.js";import"./createLucideIcon-CsIH265l.js";import"./x-BjSALVJQ.js";import"./useLocalizedStringFormatter-B0UBIKFs.js";import"./Button-CEECLnQG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DfUkCTQh.js";import"./Collection-DZTceJ5c.js";import"./index-DlodUe4K.js";import"./DragAndDrop-7lwC4zSi.js";import"./getScrollParent-BBgpxqF_.js";import"./scrollIntoView-DVC3yEfE.js";import"./SelectionIndicator-DIVBfEpP.js";import"./SelectionManager-CZQO9iyQ.js";import"./useEvent-D1SRwD2V.js";import"./useDescription-0cGLMs3d.js";import"./inertValue-DPzw7k92.js";import"./useHighlightSelectionDescription-MU2p82Fd.js";import"./useUpdateEffect-BoonRRtT.js";import"./ListKeyboardDelegate-BhTo0HRI.js";import"./useHasTabbableChild-CkNKJ-ka.js";import"./Checkbox-BrkKfbP0.js";import"./check-fBSzI3c7.js";import"./useToggleState-DhLY6quj.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
