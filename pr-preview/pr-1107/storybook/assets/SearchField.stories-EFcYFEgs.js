import{r as m,f as l,j as t}from"./iframe-B6mQtHg_.js";import{S as d}from"./SearchField-CCLa399R.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BKL6jSrM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRStpwCw.js";import"./utils-BRho1dRj.js";import"./useLocalizedStringFormatter-Bb8-ILz9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkG25mzw.js";import"./useFocusRing-D8gmEGCC.js";import"./index-9ySVHYs0.js";import"./index-DwLN6Mmc.js";import"./useFormValidation-Bzj4B0-M.js";import"./useField-DPGyVH2q.js";import"./Button-fYT3W3-R.js";import"./Hidden-Zr6f3d_F.js";import"./useLabels-BdOR7spR.js";import"./useButton-MzgnshF7.js";import"./search-us5hm2J0.js";import"./createLucideIcon-BZZ3uCZ8.js";import"./ClearButton-CqyYNZ4I.js";import"./x-CmYm4Ua_.js";import"./Button-CjEwSg5p.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C_-Wi8FC.js";import"./VisuallyHidden-B9plZj9e.js";import"./FieldError-DsUm8Cjt.js";import"./Text-P1kAvbTC.js";import"./Text-CC5_ooHx.js";import"./RSPContexts-BXQmSd5O.js";import"./Collection-Dh9iTOnN.js";import"./index-iGuCePgB.js";import"./DragAndDrop-CBT_55yO.js";import"./getScrollParent-D1snmpn8.js";import"./scrollIntoView-5Pop8Kz8.js";import"./SelectionIndicator-DxHOx4Ux.js";import"./SelectionManager-Cghfwki6.js";import"./useEvent-CRuitgb9.js";import"./useDescription-D1JiDHG9.js";import"./inertValue-qryEPJkG.js";import"./useHighlightSelectionDescription-CKNmZudT.js";import"./useUpdateEffect-NwmgfCmi.js";import"./ListKeyboardDelegate-l6tisyI0.js";import"./useHasTabbableChild-DUaE7y3E.js";import"./Checkbox-Wl7b2kJm.js";import"./Form-CsBpewWU.js";import"./check-Dhy-kqPN.js";import"./useToggleState-795f47NA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
