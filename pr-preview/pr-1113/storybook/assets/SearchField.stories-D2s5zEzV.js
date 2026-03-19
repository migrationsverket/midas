import{r as m,f as l,j as t}from"./iframe-Bv5ml16c.js";import{S as d}from"./SearchField-CDYdQqao.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Y7_QaKh0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CrzZ4zVW.js";import"./clsx-B-dksMZM.js";import"./Form-COgYqSWW.js";import"./useFocusRing-Cq3qZjv_.js";import"./index-BOMnw_9i.js";import"./index-fzWvs2nE.js";import"./Input-Cx3IrvXz.js";import"./Hidden-w_KhT5lQ.js";import"./Button-DLv8fZul.js";import"./useLabels-CDeKv3MG.js";import"./useButton-BFdfWCYJ.js";import"./FieldError-ikMxF9RT.js";import"./Text-B5E6ljJT.js";import"./clsx-Ciqy0D92.js";import"./Text-AKHTrLSe.js";import"./RSPContexts-WtmDll1S.js";import"./Group-Bt0HtLRG.js";import"./useControlledState-D6OB0qGK.js";import"./useLocalizedStringFormatter-CtTQzSvs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-e60pPeBc.js";import"./useField-DZJN0KJ3.js";import"./TextField.module-DdivwlC8.js";import"./search-65Iu-MhK.js";import"./createLucideIcon-CDmvOUsI.js";import"./x-D6Yjzl3t.js";import"./useLocalizedStringFormatter-CsxePGHN.js";import"./Button-CLHYluxH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVPJh_a3.js";import"./Collection-sUJ8wEdO.js";import"./index-koW_KEyU.js";import"./DragAndDrop-DxGNoi-w.js";import"./getScrollParent-CUNZV9Gn.js";import"./scrollIntoView-BeG1fKYH.js";import"./SelectionIndicator-B-AzNisY.js";import"./SelectionManager-qPLhk111.js";import"./useEvent-Bm-0c1SF.js";import"./useDescription-BqCWQXFE.js";import"./inertValue-CuK8CmDs.js";import"./useHighlightSelectionDescription-D6rHtJBD.js";import"./useUpdateEffect-D8wMPfEX.js";import"./ListKeyboardDelegate-BMGxV2vJ.js";import"./useHasTabbableChild-BO8VIhSA.js";import"./Checkbox-BcympGye.js";import"./check-BoftruIi.js";import"./useToggleState-Cy_jROuq.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
