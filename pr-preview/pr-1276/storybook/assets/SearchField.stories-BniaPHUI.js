import{r as m,f as l,j as t}from"./iframe-C6zRxPwt.js";import{S as d}from"./SearchField-BcJfvZCv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DrVDhVtA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEZo77lv.js";import"./clsx-B-dksMZM.js";import"./Form-PpHcZF8L.js";import"./useFocusRing-BPpPWTKG.js";import"./index-iboGWBaX.js";import"./index-DnknE0l7.js";import"./Input-cBzcpn5k.js";import"./Hidden-IUN1uUBY.js";import"./Button-C8Zk09p7.js";import"./useLabel-ecSwuXG2.js";import"./useLabels-BCAoW4uD.js";import"./useButton-BrsN7x1k.js";import"./FieldError-CzljslfK.js";import"./Text-BdoBf6Jw.js";import"./clsx-Ciqy0D92.js";import"./Text-DJ32dSE7.js";import"./RSPContexts-DPB_5Wnw.js";import"./Group-BQUgB0PV.js";import"./useControlledState-BY6_m9cF.js";import"./useLocalizedStringFormatter-D9_WmAaw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CGcSuHK2.js";import"./useField-CUNsCkrM.js";import"./TextField.module-DdivwlC8.js";import"./search-COLa-bWw.js";import"./createLucideIcon-ANvKNx91.js";import"./x-Dji1ZwpV.js";import"./useLocalizedStringFormatter-B15xbeUv.js";import"./Button-DHMnWLGJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-9r_S3aDL.js";import"./Collection-CH3bxv8u.js";import"./index-BdieSrJG.js";import"./DragAndDrop-Cdj31rqx.js";import"./getScrollParent-CSa9bUGq.js";import"./scrollIntoView-zTEWqLUD.js";import"./SelectionIndicator-B_zx6GlP.js";import"./SelectionManager-Idt-0Wa2.js";import"./useEvent-BvwOn5ub.js";import"./useDescription-D1QyVa4Z.js";import"./inertValue-CCRvj0By.js";import"./useHighlightSelectionDescription-CMPObLFN.js";import"./useUpdateEffect-CNwPz1Jx.js";import"./ListKeyboardDelegate-BmFgQiWl.js";import"./useHasTabbableChild-7NYQavIF.js";import"./Checkbox-BB3obEzf.js";import"./check-bNi9RE9F.js";import"./useToggleState-BJaSXiO_.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
