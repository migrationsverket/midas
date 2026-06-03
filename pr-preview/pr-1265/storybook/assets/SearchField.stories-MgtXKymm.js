import{r as m,f as l,j as t}from"./iframe-B-lTFvoy.js";import{S as d}from"./SearchField-Cmb0e6P6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B02wvig5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvE7c9kg.js";import"./clsx-B-dksMZM.js";import"./Form-BkPykOZH.js";import"./useFocusRing-1mXKXGvg.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./Input-DgIPJVVr.js";import"./Hidden-DgGj9s0X.js";import"./Button-DxSNXM4z.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./FieldError-BUQWfKIf.js";import"./Text-BcmCG7pr.js";import"./clsx-Ciqy0D92.js";import"./Text-C1H4pvzD.js";import"./RSPContexts-D3IvaYAD.js";import"./Group-X44LMo-J.js";import"./useControlledState-CblkDfUl.js";import"./useLocalizedStringFormatter-DFJodF-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUyjL-LP.js";import"./useField-CZNhYKxr.js";import"./TextField.module-DdivwlC8.js";import"./search-DcmFNp0b.js";import"./createLucideIcon-DTdT2pbF.js";import"./x-CB9WHZye.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./Button-aUjqyot5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BBaBjIdQ.js";import"./Collection-DN7kv7Ki.js";import"./index-D871kQeG.js";import"./DragAndDrop-DpnPldsa.js";import"./getScrollParent-C7d2R0II.js";import"./scrollIntoView-YOf-cX1Z.js";import"./SelectionIndicator-D3wtYqkk.js";import"./SelectionManager-CyiCJxHi.js";import"./useEvent-CDFu6uQE.js";import"./useDescription-C3Cr_Jxc.js";import"./inertValue-B6aWjNgm.js";import"./useHighlightSelectionDescription-BzjEiq55.js";import"./useUpdateEffect-BoHOTqay.js";import"./ListKeyboardDelegate-BUJNuGNB.js";import"./useHasTabbableChild-CH1hUSqQ.js";import"./Checkbox-CSJu_GML.js";import"./check-DAyQsrBW.js";import"./useToggleState-B0Go0anX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
