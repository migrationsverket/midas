import{r as m,f as l,j as t}from"./iframe-CjS4NLOn.js";import{S as d}from"./SearchField-DPLhs85-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-402czmVQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bd-AzVom.js";import"./clsx-B-dksMZM.js";import"./Form-BO2cd7HV.js";import"./useFocusRing-DglKaSCo.js";import"./index-BAKX6Q0C.js";import"./index-Bkm3VJ40.js";import"./Input-qegJS3K7.js";import"./Hidden-DQ5FusQj.js";import"./Button-Dd-c5XOo.js";import"./useLabel-BNspr0mf.js";import"./useLabels-Dg9_l0gi.js";import"./useButton-K15jCtz1.js";import"./FieldError-mjdlktiQ.js";import"./Text-BbW2XwBz.js";import"./clsx-Ciqy0D92.js";import"./Text-CX-M1xx_.js";import"./RSPContexts-kqnwGWDt.js";import"./Group-D5gxugEo.js";import"./useControlledState-BbWK1__y.js";import"./useLocalizedStringFormatter-gid5zSz2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnwCAK_R.js";import"./useField-B9WQ8ZUl.js";import"./TextField.module-DdivwlC8.js";import"./search-DaiHU8vK.js";import"./createLucideIcon-DkfyV_c3.js";import"./x-Dux1vDQf.js";import"./useLocalizedStringFormatter-FU720mIV.js";import"./Button-iv9BguPP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CY_5XPqM.js";import"./Collection-D4qV2wHW.js";import"./index-BAbiaVhP.js";import"./DragAndDrop-Bn1OPxBu.js";import"./getScrollParent-CSIbG2HY.js";import"./scrollIntoView-2fiPBvL-.js";import"./SelectionIndicator-CWcDMFoj.js";import"./SelectionManager-BCUC7b48.js";import"./useEvent-CiAr47a4.js";import"./useDescription-CBNmeEe_.js";import"./inertValue-DOJIBzud.js";import"./useHighlightSelectionDescription-20Z4BCUm.js";import"./useUpdateEffect-DS0b_jEY.js";import"./ListKeyboardDelegate-8fQbIU8o.js";import"./useHasTabbableChild-HrGtippn.js";import"./Checkbox-DJzxgVnb.js";import"./check-J6EiRMNo.js";import"./useToggleState-DrRy7Zt1.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
