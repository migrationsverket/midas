import{r as m,f as l,j as t}from"./iframe-BEfu4cuV.js";import{S as d}from"./SearchField-pJu9ex7-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-1flYilGn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BeR4bg4o.js";import"./clsx-B-dksMZM.js";import"./Form-CziSx__h.js";import"./useFocusRing-C6rqVt89.js";import"./index-BZsmp3Wz.js";import"./index-XFYlP6zW.js";import"./Input-CwNBuFyA.js";import"./Hidden-DbtYdw9n.js";import"./Button-DwT05Yas.js";import"./useLabels-Cc8XnrID.js";import"./useButton-DfYe28nP.js";import"./FieldError-RSI06Lef.js";import"./Text-BC7EJkoa.js";import"./clsx-Ciqy0D92.js";import"./Text-Cvg6C9XG.js";import"./RSPContexts-BAhkEONY.js";import"./Group-BgZaktBI.js";import"./useControlledState-DrRQ3ZH3.js";import"./useLocalizedStringFormatter-Bskkm3TD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DBuQInhj.js";import"./useField-PSDLB5ry.js";import"./TextField.module-DdivwlC8.js";import"./search-D0T0qXvk.js";import"./createLucideIcon-BxYC1ZwZ.js";import"./x-Dz0TYTCE.js";import"./useLocalizedStringFormatter-DJkiKMK1.js";import"./Button-CNvrI9qG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CLBjEdEZ.js";import"./Collection-BbeK18M5.js";import"./index-BumNEWW1.js";import"./DragAndDrop-Dcupy8LX.js";import"./getScrollParent-EJnTNbj6.js";import"./scrollIntoView-B2G8ZQve.js";import"./SelectionIndicator-0ZDh-mJx.js";import"./SelectionManager-D2Bv4BF3.js";import"./useEvent--stzEwau.js";import"./useDescription-Bd5nXxJ0.js";import"./inertValue-Bsj8p-uR.js";import"./useHighlightSelectionDescription-DlMwdZzM.js";import"./useUpdateEffect-DHM_j3Nb.js";import"./ListKeyboardDelegate-BwiHoAty.js";import"./useHasTabbableChild-BzawTm4T.js";import"./Checkbox-DUyvIVLI.js";import"./check-CvuCZxUT.js";import"./useToggleState-yRGc-m5i.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
