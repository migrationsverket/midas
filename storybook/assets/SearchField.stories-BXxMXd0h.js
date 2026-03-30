import{r as m,f as l,j as t}from"./iframe-BWPy1RBq.js";import{S as d}from"./SearchField-isRsFkcp.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BVdbf1qK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-K3-6RYqB.js";import"./clsx-B-dksMZM.js";import"./Form-DbQxgntm.js";import"./useFocusRing-RbbtUgdg.js";import"./index-r2wyVjUx.js";import"./index-cuXqdBSv.js";import"./Input-HeYl3kzw.js";import"./Hidden-Tw89Zkrb.js";import"./Button-CpSzsQmu.js";import"./useLabel-DJc0EjwM.js";import"./useLabels-ByrSZnHm.js";import"./useButton-Be0Brtpy.js";import"./FieldError-Cz5zi-ZF.js";import"./Text-Cia4oSWl.js";import"./clsx-Ciqy0D92.js";import"./Text-NU9ujCYW.js";import"./RSPContexts-nAVSp4dG.js";import"./Group-FvQbGEnE.js";import"./useControlledState-D92tKPK_.js";import"./useLocalizedStringFormatter-1oCiTqWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dls8T7AD.js";import"./useField-CUHsbM6E.js";import"./TextField.module-DdivwlC8.js";import"./search-DdFyV2zy.js";import"./createLucideIcon-B4kCR5jG.js";import"./x-28n2c5kv.js";import"./useLocalizedStringFormatter-C9Npvx33.js";import"./Button-DrPZXGaG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bglg35TW.js";import"./Collection-BNyZ9c9Q.js";import"./index-h_8LGHd6.js";import"./DragAndDrop-SNHBtXaN.js";import"./getScrollParent-Bz2Jpk0G.js";import"./scrollIntoView-BPThSa08.js";import"./SelectionIndicator-CSEVtPet.js";import"./SelectionManager-DwZVDrXj.js";import"./useEvent-BFfcpkt9.js";import"./useDescription-DKa3yvbb.js";import"./inertValue-1NFwY83g.js";import"./useHighlightSelectionDescription-8rbKr_zu.js";import"./useUpdateEffect-DGnIDERi.js";import"./ListKeyboardDelegate-DEEdN1cX.js";import"./useHasTabbableChild-BfWIPyJa.js";import"./Checkbox-B9ICRrXa.js";import"./check-BKFznksD.js";import"./useToggleState-jeQBOVoK.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
