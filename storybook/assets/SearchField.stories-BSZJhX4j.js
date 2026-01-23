import{r as m,f as l,j as t}from"./iframe-d-FQpM90.js";import{S as d}from"./SearchField-Dx-bXdDf.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DuFmV8Dk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DT8flL-3.js";import"./utils-CTrWZFVM.js";import"./useLocalizedStringFormatter-CKeA94dv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DHoUcAfH.js";import"./useFocusRing-DI4CuVxJ.js";import"./index-Ccbx2rrI.js";import"./index-B0n8z5FV.js";import"./useFormValidation-BW7mP-sh.js";import"./useField-BNyzTKfn.js";import"./Button-CQtK7RQv.js";import"./Hidden-D7DESwR-.js";import"./useLabels-DCiGcPnN.js";import"./useButton-ONss29nc.js";import"./search-BYPxnigC.js";import"./createLucideIcon-Bz-p2P2k.js";import"./ClearButton-CdREQXIs.js";import"./Button-XCmFSPiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DnVlYLjp.js";import"./VisuallyHidden-C749xTmY.js";import"./x-C-qeqbMv.js";import"./FieldError-BjEJz6Ju.js";import"./Text-BU1xEAD-.js";import"./Text-CFvohxCr.js";import"./RSPContexts-36mIdLbY.js";import"./Collection-CjZd06bD.js";import"./index-D54MaNBW.js";import"./DragAndDrop-C-mhJiDu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B_S-ppix.js";import"./SelectionManager-DbVn8V7O.js";import"./useEvent-CkmhN7CQ.js";import"./useDescription-DkUt8NOh.js";import"./inertValue-DfsQxsdt.js";import"./useHighlightSelectionDescription-D87k6349.js";import"./useUpdateEffect-BS41toWr.js";import"./ListKeyboardDelegate-Dutj400W.js";import"./useHasTabbableChild-BTgM6qns.js";import"./Checkbox-kMvjCO5W.js";import"./Form-OKrhR-Fj.js";import"./check-BcM2i7YL.js";import"./useToggleState-07FiMtp1.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
