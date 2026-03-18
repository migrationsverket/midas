import{r as m,f as l,j as t}from"./iframe-C--goO8e.js";import{S as d}from"./SearchField-C-8oIHel.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-XIehqcou.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-X-QYJxtN.js";import"./utils-DSxiF1Cp.js";import"./useLocalizedStringFormatter-Ci2N_wM7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CyuAZqkj.js";import"./useFocusRing-BcZJn3fC.js";import"./index-DvAhHsax.js";import"./index-DLC2Qh-Q.js";import"./useFormValidation--rHLyQTt.js";import"./useField-BxRSRWrc.js";import"./Button-BI3Iq_aE.js";import"./Hidden-GH0AX83d.js";import"./useLabels-CvgKtUT-.js";import"./useButton-Xz1kmXFC.js";import"./search-DATyf13Z.js";import"./createLucideIcon-pUc5o6Nr.js";import"./ClearButton-D3UQbzRk.js";import"./x-xvoCsFgY.js";import"./Button-D9Z4rzGT.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-L0RS7m21.js";import"./VisuallyHidden-C4dWGUSD.js";import"./FieldError-Dwje_tcE.js";import"./Text-DfLs60II.js";import"./Text-9OutCub2.js";import"./RSPContexts-DBlfftlT.js";import"./Collection-C5fmw-uG.js";import"./index-BuKZ05EQ.js";import"./DragAndDrop-Cf-zjy4O.js";import"./getScrollParent-gKv46a13.js";import"./scrollIntoView-Zj7kw8yy.js";import"./SelectionIndicator-DiVi5b4I.js";import"./SelectionManager-QCyNYMjo.js";import"./useEvent-teLk4nYd.js";import"./useDescription-DPoM5gP_.js";import"./inertValue-BUAHgEaR.js";import"./useHighlightSelectionDescription-BSHw6InI.js";import"./useUpdateEffect-gp3L2Yfr.js";import"./ListKeyboardDelegate-B2rGKOlU.js";import"./useHasTabbableChild-BL7yBKMn.js";import"./Checkbox-EmttVRLa.js";import"./Form-BhOwk5Rh.js";import"./check-BkFvdX8A.js";import"./useToggleState-BzfcYAOS.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
